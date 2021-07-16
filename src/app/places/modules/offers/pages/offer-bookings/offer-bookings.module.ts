import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OfferBookingsPageRoutingModule } from './offer-bookings-routing.module';
import { OfferBookingsPage } from './offer-bookings.page';

@NgModule({
    imports: [CommonModule, IonicModule, OfferBookingsPageRoutingModule],
    declarations: [OfferBookingsPage],
})
export class OfferBookingsPageModule {}
