import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Place } from '../../../../shared/places/models/place.interface';
import { PlaceService } from '../../../services/place.service';

@Injectable()
export class PlaceDetailResolve implements Resolve<PlaceDetailResolveData> {
    constructor(private readonly placeService: PlaceService) {}

    resolve(snapshot: ActivatedRouteSnapshot) {
        const id = snapshot.paramMap.get('id');

        return {
            id,
            data$: this.placeService.getById(id),
        };
    }
}

export interface PlaceDetailResolveData {
    id: string;
    data$: Observable<Place>;
}
