import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailResolve } from './resolves/recipe-detail.resolve';
import { RecipeListResolve } from './resolves/recipe-list.resolve';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/recipe-list/recipe-list.module').then((m) => m.RecipeListPageModule),
        resolve: {
            data: RecipeListResolve,
        },
    },
    {
        path: ':id',
        loadChildren: () => import('./pages/recipe-detail/recipe-detail.module').then((m) => m.RecipeDetailPageModule),
        resolve: {
            detail: RecipeDetailResolve,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipesRoutingModule {}
