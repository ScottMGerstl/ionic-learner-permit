import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Offer } from '../../../../../shared/offers/models/offer.interface';
import { OfferService } from '../../../offers/services/offer.service';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.page.html',
    styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage {
    loading = false;

    data: Offer[];

    currentFilter: PlacesFilter = PlacesFilter.all;
    filteredData: Offer[];

    constructor(private readonly offersService: OfferService, private readonly authService: AuthService) {}

    ionViewWillEnter() {
        this.loadData();
    }

    onFilterChange(eventDetail: any) {
        this.currentFilter = (eventDetail as CustomEvent<{ value: PlacesFilter }>).detail.value;
        this.filterData();
    }

    private filterData() {
        if (this.currentFilter === PlacesFilter.all) {
            this.filteredData = this.data;
        } else if (this.currentFilter === PlacesFilter.bookable) {
            this.filteredData = this.data.filter((x) => x.createdUserId !== this.authService.userId);
        }
    }

    private loadData() {
        this.loading = true;

        this.offersService
            .getAll()
            .pipe(take(1))
            .subscribe((x) => {
                this.data = x;
                this.filterData();
                this.loading = false;
            });
    }
}

enum PlacesFilter {
    all = 'all',
    bookable = 'bookable',
}
