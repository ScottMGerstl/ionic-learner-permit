import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListItemComponent } from './components/offer-list-item/offer-list-item.component';
import { IonicModule } from '@ionic/angular';
import { OfferDetailResolve } from './resolves/offer-detail.resolve';

@NgModule({
    declarations: [OfferListItemComponent],
    imports: [CommonModule, IonicModule],
    providers: [OfferDetailResolve],
    exports: [OfferListItemComponent],
})
export class OffersSharedModule {}
