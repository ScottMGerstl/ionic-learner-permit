import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Place } from '../../../../../shared/places/models/place.interface';
import { FormAction } from '../../../../../shared/enum/form-action.enum';
import { OfferDetailResolveData } from '../../../../../shared/offers/resolves/offer-detail.resolve';
import { FormPageBase } from '../../../../../shared/forms/form-page.base';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { OfferService } from '../../services/offer.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Offer } from 'src/app/shared/offers/models/offer.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
    selector: 'app-offer-form',
    templateUrl: './offer-form.page.html',
    styleUrls: ['./offer-form.page.scss'],
})
export class OfferFormPage extends FormPageBase implements OnInit {
    uiConfig: OfferFormUiConfig;

    id: string;
    data$: Observable<Place>;

    now = new Date();

    availability = {
        min: this.now.toISOString(),
        max: this.now.toISOString(),
    };

    constructor(
        private readonly authService: AuthService,
        private readonly route: ActivatedRoute,
        private readonly offerService: OfferService,
        private readonly navController: NavController,
        private readonly loadingController: LoadingController,
        fb: FormBuilder
    ) {
        super(fb, route.snapshot.data.formAction);

        this.formAction = this.route.snapshot.data.formAction;

        const maxAvailability = this.now;
        maxAvailability.setFullYear(maxAvailability.getFullYear() + 5);
        this.availability.max = maxAvailability.toISOString();
    }

    ngOnInit() {
        this.uiConfig = offerFormUiConfigMap[this.formAction];

        if (this.isEdit) {
            const { id, data$ }: OfferDetailResolveData = this.route.snapshot.data.detail;
            this.id = id;

            data$.pipe(take(1)).subscribe((x) => {
                this.form.patchValue(x);
            });
        }
    }

    protected async onFormCanSubmit() {
        return new Promise<void>(async (resolve) => {
            const loader = await this.loadingController.create({
                keyboardClose: true,
                spinner: 'circular',
                message: this.uiConfig.savingText,
            });

            try {
                const formData = this.form.value;
                const saveData: Omit<Offer, 'id'> = {
                    createdUserId: this.authService.userId,
                    description: formData.description,
                    title: formData.title,
                    price: formData.price,
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                };

                loader.present();

                const saveObservable = this.isEdit
                    ? this.offerService.update(this.id, saveData)
                    : this.offerService.create(saveData);

                saveObservable.pipe(take(1)).subscribe(async (result: { id: string }) => {
                    loader.dismiss();
                    await this.navController.navigateBack('/places/offers/' + (this.isEdit ? this.id : result.id));
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
            title: [null],
            description: [null],
            price: [null],
            imageSrc: [null],
            startDate: [null],
            endDate: [null],
        });
    }
}

interface OfferFormUiConfig {
    title: string;
    confirmText: string;
    defaultHref: (id: string) => string;
    savingText: string;
}

const offerFormUiConfigMap: { [key in Extract<FormAction, FormAction.create | FormAction.update>]: OfferFormUiConfig } =
    {
        create: {
            title: 'New Offer',
            confirmText: 'Create',
            defaultHref: () => '/places/offers',
            savingText: 'Registering your offer',
        },
        update: {
            title: 'Update Offer',
            confirmText: 'Update',
            defaultHref: (id: string) => '/places/offers/' + id,
            savingText: 'Updating your offer',
        },
    };
