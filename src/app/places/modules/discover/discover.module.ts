import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OffersSharedModule } from 'src/app/shared/offers/offers.module';
import { DiscoverRoutingModule } from './discover-routing.module';
import { PlaceDetailResolve } from './resolves/place-detail.resolve';

@NgModule({
    imports: [CommonModule, IonicModule, OffersSharedModule, DiscoverRoutingModule],
    providers: [PlaceDetailResolve],
})
export class DiscoverModule {}
