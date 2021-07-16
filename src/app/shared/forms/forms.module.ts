import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [FormControlComponent],
    imports: [CommonModule, IonicModule, ReactiveFormsModule],
    exports: [FormControlComponent, ReactiveFormsModule],
})
export class FormsSharedModule {}
