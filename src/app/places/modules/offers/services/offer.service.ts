import { Injectable } from '@angular/core';
import { Offer } from '../../../../shared/offers/models/offer.interface';
import { BaseService } from '../../../../shared/services/base.service';

@Injectable({
    providedIn: 'root',
})
export class OfferService extends BaseService<Offer> {
    protected seedData() {
        this.create({
            title: 'Manhattan Mansion',
            description: 'In the heart of NYC.',
            price: 149.99,
            imageSrc: 'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
            startDate: new Date(2021, 7, 6).toISOString(),
            endDate: new Date(2021, 7, 22).toISOString(),
            createdUserId: 'u1',
        });
        this.create({
            title: 'Florida Flat',
            description: 'A breezy apartment bathed in sunshine.',
            price: 189.99,
            imageSrc: 'https://photos.zillowstatic.com/fp/d825bab47b424b672fe0a3e551214d86-p_e.jpg',
            startDate: new Date(2021, 7, 3).toISOString(),
            endDate: new Date(2021, 7, 25).toISOString(),
            createdUserId: 'u2',
        });
        this.create({
            title: 'The Bloody Palace',
            description: 'The castle of Count Dracula.',
            price: 666.42,
            imageSrc: 'https://bloody-disgusting.com/wp-content/uploads/2014/05/draculas-romanian-castle.jpg',
            startDate: new Date(2021, 7, 9).toISOString(),
            endDate: new Date(2021, 7, 19).toISOString(),
            createdUserId: 'u3',
        });
    }
}
