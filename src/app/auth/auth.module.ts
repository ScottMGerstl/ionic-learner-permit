import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [CommonModule, IonicModule, AuthRoutingModule],
})
export class AuthModule {}
