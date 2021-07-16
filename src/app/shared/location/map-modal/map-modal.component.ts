import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
    selector: 'app-map-modal',
    templateUrl: './map-modal.component.html',
    styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent {
    apiLoaded: Observable<boolean>;

    // Todo. no good for now

    constructor(private readonly modalController: ModalController, httpClient: HttpClient) {
        this.apiLoaded = httpClient
            .jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyA8xgFuUGM8T9FM3wGu-bys6q-xO3WHJ54', 'callback')
            .pipe(
                map(() => true),
                catchError(() => of(false))
            );
    }

    onCancelClick() {
        this.modalController.dismiss();
    }
}
