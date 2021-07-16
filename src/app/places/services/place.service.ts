import { Injectable } from '@angular/core';
import { Place } from '../../shared/places/models/place.interface';
import { BaseService } from '../../shared/services/base.service';

@Injectable({
    providedIn: 'root',
})
export class PlaceService extends BaseService<Place> {
    protected seedData() {
        this.create({
            title: 'Manhattan Mansion',
            description: 'In the heart of NYC.',
            price: 149.99,
            imageSrc: 'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
        });
        this.create({
            title: 'Florida Flat',
            description: 'A breezy apartment bathed in sunshine.',
            price: 189.99,
            imageSrc: 'https://photos.zillowstatic.com/fp/d825bab47b424b672fe0a3e551214d86-p_e.jpg',
        });
        this.create({
            title: 'The Bloody Palace',
            description: 'The castle of Count Dracula.',
            price: 666.42,
            imageSrc: 'https://bloody-disgusting.com/wp-content/uploads/2014/05/draculas-romanian-castle.jpg',
        });
    }
}
