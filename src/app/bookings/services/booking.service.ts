import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Booking } from '../models/booking.interface';

@Injectable({
    providedIn: 'root',
})
export class BookingService extends BaseService<Booking> {
    seedData() {
        this.create({
            placeId: '1',
            userId: 'u1',
            placeTitle: 'Manhattan Mansion',
            guestCount: 2,
        });
        this.create({
            placeId: '3',
            userId: 'u2',
            placeTitle: 'The Bloody Palace',
            guestCount: 5,
        });
    }
}
