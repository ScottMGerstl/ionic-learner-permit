import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'places',
        loadChildren: () => import('./places/places.module').then((m) => m.PlacesModule),
        canLoad: [AuthGuard],
    },
    {
        path: 'bookings',
        loadChildren: () => import('./bookings/bookings.module').then((m) => m.BookingsModule),
        canLoad: [AuthGuard],
    },
    {
        path: '',
        redirectTo: 'places',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
