import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../../../auth/services/auth.service';
import { Offer } from '../../../../../shared/offers/models/offer.interface';
import { OfferDetailResolveData } from '../../../../../shared/offers/resolves/offer-detail.resolve';
import { OfferService } from '../../services/offer.service';

@Component({
    selector: 'app-offer-bookings',
    templateUrl: './offer-bookings.page.html',
    styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
    loading = false;

    id: string;
    data: Offer;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly authService: AuthService,
        private readonly dataService: OfferService
    ) {}

    ngOnInit() {
        const { id }: OfferDetailResolveData = this.route.snapshot.data.detail;
        this.id = id;
    }

    ionViewDidEnter() {
        this.loadData();
    }

    get isOwner() {
        return this.data.createdUserId === this.authService.userId;
    }

    loadData() {
        this.loading = true;

        this.dataService
            .getById(this.id)
            .pipe(take(1))
            .subscribe((x) => {
                this.data = x;
                this.loading = false;
            });
    }
}
