import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.interface';
import { OfferService } from '../../../places/modules/offers/services/offer.service';

@Injectable()
export class OfferDetailResolve implements Resolve<OfferDetailResolveData> {
    constructor(private readonly dataService: OfferService) {}

    resolve(snapshot: ActivatedRouteSnapshot) {
        const id = snapshot.paramMap.get('id');

        return {
            id,
            data$: this.dataService.getById(id),
        };
    }
}

export interface OfferDetailResolveData {
    id: string;
    data$: Observable<Offer>;
}
