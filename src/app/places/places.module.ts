import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlacesRoutingModule } from './places-routing.module';
import { PlacesPage } from './places.page';

@NgModule({
    imports: [CommonModule, IonicModule, PlacesRoutingModule],
    declarations: [PlacesPage],
})
export class PlacesModule {}
