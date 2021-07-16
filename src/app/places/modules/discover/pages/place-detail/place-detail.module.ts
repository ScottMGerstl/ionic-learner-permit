import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BookingSharedModule } from '../../../../../shared/booking/booking.module';
import { PlaceDetailPageRoutingModule } from './place-detail-routing.module';
import { PlaceDetailPage } from './place-detail.page';

@NgModule({
    imports: [CommonModule, IonicModule, PlaceDetailPageRoutingModule, BookingSharedModule],
    declarations: [PlaceDetailPage],
})
export class PlaceDetailPageModule {}
