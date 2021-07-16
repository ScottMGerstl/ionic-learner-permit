import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../map-modal/map-modal.component';

@Component({
    selector: 'app-location-picker',
    templateUrl: './location-picker.component.html',
    styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent {
    constructor(private readonly modalController: ModalController) {}

    async onSelectLocationClick() {
        const modal = await this.modalController.create({
            component: MapModalComponent,
        });

        modal.present();
    }
}
