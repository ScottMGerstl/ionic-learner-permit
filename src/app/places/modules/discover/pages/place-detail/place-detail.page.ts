import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BookingFormComponent } from '../../../../../shared/booking/components/booking-form/booking-form.component';
import { BookingType } from '../../../../../shared/booking/models/booking.type';
import { Offer } from '../../../../../shared/offers/models/offer.interface';
import { OfferDetailResolveData } from '../../../../../shared/offers/resolves/offer-detail.resolve';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    data: Offer;
    private id: string;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly modalController: ModalController,
        private readonly actionSheetController: ActionSheetController,
        private readonly authService: AuthService
    ) {}

    ngOnInit() {
        const { id, data$ }: OfferDetailResolveData = this.route.snapshot.data.detail;
        this.id = id;
        data$.pipe(take(1)).subscribe((x) => (this.data = x));
    }

    get canBook() {
        return this.authService.userId !== this.data.createdUserId;
    }

    async onBookClicked() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Scheduling Method',
            buttons: [
                {
                    text: 'Select Dates',
                    handler: () => {
                        this.openBookingModal(this.data, 'select');
                    },
                },
                {
                    text: `Whatever's Available`,
                    handler: () => {
                        this.openBookingModal(this.data, 'random');
                    },
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
            ],
        });

        actionSheet.present();
    }

    private async openBookingModal(offer: Offer, mode: BookingType) {
        const modal = await this.modalController.create({
            component: BookingFormComponent,
            componentProps: {
                bookFor: offer,
                bookMode: mode,
            },
        });

        modal.present();
        await modal.onDidDismiss();
    }
}
