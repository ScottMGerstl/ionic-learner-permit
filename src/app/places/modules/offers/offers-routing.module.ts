import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAction } from '../../../shared/enum/form-action.enum';
import { OfferDetailResolve } from '../../../shared/offers/resolves/offer-detail.resolve';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/offer-list/offer-list.module').then((m) => m.OfferListPageModule),
    },
    {
        path: 'new',
        loadChildren: () => import('./pages/offer-form/offer-form.module').then((m) => m.OfferFormPageModule),
        data: {
            formAction: FormAction.create,
        },
    },
    {
        path: ':id',
        loadChildren: () =>
            import('./pages/offer-bookings/offer-bookings.module').then((m) => m.OfferBookingsPageModule),
        resolve: {
            detail: OfferDetailResolve,
        },
    },
    {
        path: ':id/edit',
        loadChildren: () => import('./pages/offer-form/offer-form.module').then((m) => m.OfferFormPageModule),
        data: {
            formAction: FormAction.update,
        },
        resolve: {
            detail: OfferDetailResolve,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OffersRoutingModule {}
