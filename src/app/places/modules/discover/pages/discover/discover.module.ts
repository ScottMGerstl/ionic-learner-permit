import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DiscoverPageRoutingModule } from './discover-routing.module';
import { DiscoverPage } from './discover.page';

@NgModule({
    imports: [CommonModule, IonicModule, DiscoverPageRoutingModule],
    declarations: [DiscoverPage],
})
export class DiscoverPageModule {}
