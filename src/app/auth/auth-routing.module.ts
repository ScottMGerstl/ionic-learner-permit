import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'sign-in',
        loadChildren: () => import('./pages/sign-in/sign-in.module').then((m) => m.SignInPageModule),
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
