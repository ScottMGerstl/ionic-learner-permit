import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
    {
        path: '',
        component: PlacesPage,
        children: [
            {
                path: 'discover',
                loadChildren: () => import('./modules/discover/discover.module').then((m) => m.DiscoverModule),
            },
            {
                path: 'offers',
                loadChildren: () => import('./modules/offers/offers.module').then((m) => m.OffersModule),
            },
            {
                path: '',
                redirectTo: 'discover',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlacesRoutingModule {}
