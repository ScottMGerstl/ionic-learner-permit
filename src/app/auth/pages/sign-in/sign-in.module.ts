import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsSharedModule } from '../../../shared/forms/forms.module';
import { SignInPageRoutingModule } from './sign-in-routing.module';
import { SignInPage } from './sign-in.page';

@NgModule({
    imports: [CommonModule, IonicModule, FormsSharedModule, SignInPageRoutingModule],
    declarations: [SignInPage],
})
export class SignInPageModule {}
