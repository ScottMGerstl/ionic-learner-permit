import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../../../auth/services/auth.service';
import { Offer } from '../../../../../shared/offers/models/offer.interface';
import { OfferService } from '../../services/offer.service';

@Component({
    selector: 'app-offer-list',
    templateUrl: './offer-list.page.html',
    styleUrls: ['./offer-list.page.scss'],
})
export class OfferListPage {
    loading = false;
    data: Offer[];

    constructor(
        private readonly offersService: OfferService,
        private readonly router: Router,
        private readonly alertController: AlertController,
        private readonly authService: AuthService
    ) {}

    ionViewWillEnter() {
        this.loadData();
    }

    onEditClick(id: string, slidingItem: IonItemSliding) {
        this.router.navigate(['/', 'places', 'offers', id, 'edit']);
        setTimeout(() => slidingItem.close(), 300);
    }

    async onDeleteClick(id: string, slidingItem: IonItemSliding) {
        const alert = await this.alertController.create({
            header: 'Delete Offer?',
            message: 'Are you sure you want to cancel this booking?',
            buttons: [
                {
                    text: 'Nevermind',
                    role: 'cancel',
                },
                {
                    text: 'Delete Offer',
                    role: 'confirm',
                    handler: () => {
                        this.offersService
                            .delete(id)
                            .pipe(take(1))
                            .subscribe(() => this.loadData());
                    },
                },
            ],
        });

        alert.present();
        slidingItem.close();
    }

    private loadData() {
        this.loading = true;

        this.offersService
            .getAll()
            .pipe(take(1))
            .subscribe((res) => {
                this.data = res.filter((x) => x.createdUserId === this.authService.userId);
                this.loading = false;
            });
    }
}
