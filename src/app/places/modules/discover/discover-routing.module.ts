import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferDetailResolve } from '../../../shared/offers/resolves/offer-detail.resolve';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/discover/discover.module').then((m) => m.DiscoverPageModule),
    },
    {
        path: ':id',
        loadChildren: () => import('./pages/place-detail/place-detail.module').then((m) => m.PlaceDetailPageModule),
        resolve: {
            detail: OfferDetailResolve,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DiscoverRoutingModule {}
