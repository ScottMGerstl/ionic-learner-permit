import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferFormPage } from './offer-form.page';

const routes: Routes = [
  {
    path: '',
    component: OfferFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferFormPageRoutingModule {}
