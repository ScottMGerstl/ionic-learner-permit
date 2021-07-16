import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { BookingService } from 'src/app/bookings/services/booking.service';
import { FormAction } from '../../../../shared/enum/form-action.enum';
import { FormPageBase } from '../../../../shared/forms/form-page.base';
import { Offer } from '../../../offers/models/offer.interface';
import { BookingType } from '../../models/booking.type';

@Component({
    selector: 'app-booking-form',
    templateUrl: './booking-form.component.html',
    styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent extends FormPageBase implements OnInit {
    @Input() bookFor: Offer;

    @Input() bookMode: BookingType;

    constructor(
        private readonly modalController: ModalController,
        private readonly bookingService: BookingService,
        private readonly loadingController: LoadingController,
        fb: FormBuilder
    ) {
        super(fb, FormAction.create);
    }

    ngOnInit() {
        if (this.bookMode === 'random') {
            setTimeout(() => {
                const from = new Date(this.bookFor.startDate);
                const to = new Date(this.bookFor.endDate);

                const startDate = new Date(
                    from.getTime() + Math.random() * (to.getTime() - 7 * 24 * 60 * 60 * 1000 - from.getTime())
                );

                const endDate = new Date(
                    startDate.getTime() +
                        Math.random() * (startDate.getTime() + 6 * 24 * 60 * 60 * 1000 - startDate.getTime())
                );

                this.form.patchValue({
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                });
            }, 200);
        }
    }

    onCancelClick() {
        this.modalController.dismiss(null, 'cancel');
    }

    protected async onFormCanSubmit() {
        return new Promise<void>(async (resolve) => {
            const loader = await this.loadingController.create({
                keyboardClose: true,
                spinner: 'circular',
                message: 'Booking your stay',
            });

            try {
                loader.present();

                const saveObservable = this.bookingService.create({
                    placeId: this.bookFor.id,
                    guestCount: this.form.value.guestCount,
                    placeTitle: this.bookFor.title,
                    userId: this.form.value.firstName + this.form.value.lastName,
                });

                saveObservable.pipe(take(1)).subscribe(async (x) => {
                    loader.dismiss();
                    this.modalController.dismiss({ bookingId: x.id }, 'confirm');
                    resolve();
                });
            } catch (err) {
                loader.dismiss();
                console.error(err);
                resolve();
            }
        });
    }

    protected createForm(fb: FormBuilder) {
        return fb.group({
            firstName: [null],
            lastName: [null],
            guestCount: [2],
            startDate: [null],
            endDate: [null],
        });
    }
}
