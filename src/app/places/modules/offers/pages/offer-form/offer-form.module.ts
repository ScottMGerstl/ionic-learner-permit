import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsSharedModule } from '../../../../../shared/forms/forms.module';
import { OfferFormPageRoutingModule } from './offer-form-routing.module';
import { OfferFormPage } from './offer-form.page';

@NgModule({
    imports: [CommonModule, IonicModule, FormsSharedModule, OfferFormPageRoutingModule],
    declarations: [OfferFormPage],
})
export class OfferFormPageModule {}
