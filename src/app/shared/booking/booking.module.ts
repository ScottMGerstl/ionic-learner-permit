import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormsSharedModule } from '../forms/forms.module';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@NgModule({
    declarations: [BookingFormComponent],
    imports: [CommonModule, IonicModule, FormsSharedModule, ReactiveFormsModule],
    exports: [BookingFormComponent],
})
export class BookingSharedModule {}
