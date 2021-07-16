import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BookingsRoutingModule } from './bookings-routing.module';

@NgModule({
    imports: [CommonModule, IonicModule, BookingsRoutingModule],
})
export class BookingsModule {}
