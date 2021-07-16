import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OffersRoutingModule } from './offers-routing.module';
import { OfferDetailResolve } from '../../../shared/offers/resolves/offer-detail.resolve';

@NgModule({
    imports: [CommonModule, IonicModule, OffersRoutingModule],
    providers: [OfferDetailResolve],
})
export class OffersModule {}
