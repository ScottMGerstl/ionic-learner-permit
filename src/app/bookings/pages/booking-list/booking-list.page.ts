import { Component } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { Booking } from '../../models/booking.interface';
import { BookingService } from '../../services/booking.service';

@Component({
    selector: 'app-booking-list',
    templateUrl: './booking-list.page.html',
    styleUrls: ['./booking-list.page.scss'],
})
export class BookingListPage {
    loading = false;
    data: Booking[];

    constructor(
        private readonly bookingService: BookingService,
        private readonly alertController: AlertController,
        private readonly loadingController: LoadingController,
        private readonly authService: AuthService
    ) {}

    ionViewWillEnter() {
        this.loadData();
    }

    async onCancelBookingClick(bookingId: string, slidingItem: IonItemSliding) {
        slidingItem.close();

        const alert = await this.alertController.create({
            header: 'Cancel Booking?',
            message: 'Are you sure you want to cancel this booking?',
            buttons: [
                {
                    text: 'Nevermind',
                    role: 'cancel',
                },
                {
                    text: 'Cancel Booking',
                    role: 'confirm',
                    handler: async () => {
                        const loader = await this.loadingController.create({
                            keyboardClose: true,
                            spinner: 'circular',
                            message: 'Cancelling your reservation',
                        });

                        loader.present();

                        this.bookingService
                            .delete(bookingId)
                            .pipe(take(1))
                            .subscribe(async () => {
                                await this.loadData();
                                loader.dismiss();
                            });
                    },
                },
            ],
        });

        alert.present();
    }

    private loadData(): Promise<void> {
        return new Promise<void>((resolve) => {
            this.loading = true;

            this.bookingService
                .getAll()
                .pipe(take(1))
                .subscribe((res) => {
                    this.data = res.filter((x) => x.userId === this.authService.userId);
                    this.loading = false;
                    resolve();
                });
        });
    }
}
