import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OffersSharedModule } from '../../../../../shared/offers/offers.module';
import { OfferListPageRoutingModule } from './offer-list-routing.module';
import { OfferListPage } from './offer-list.page';

@NgModule({
    imports: [CommonModule, IonicModule, OfferListPageRoutingModule, OffersSharedModule],
    declarations: [OfferListPage],
})
export class OfferListPageModule {}
