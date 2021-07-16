import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BookingListPageRoutingModule } from './booking-list-routing.module';
import { BookingListPage } from './booking-list.page';

@NgModule({
    imports: [CommonModule, IonicModule, BookingListPageRoutingModule],
    declarations: [BookingListPage],
})
export class BookingListPageModule {}
