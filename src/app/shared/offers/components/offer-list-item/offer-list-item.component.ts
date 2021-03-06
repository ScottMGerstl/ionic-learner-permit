import { Component, Input } from '@angular/core';
import { Offer } from '../../models/offer.interface';

@Component({
    selector: 'app-offer-list-item',
    templateUrl: './offer-list-item.component.html',
    styleUrls: ['./offer-list-item.component.scss'],
})
export class OfferListItemComponent {
    @Input() offer: Offer;

    constructor() {}
}
