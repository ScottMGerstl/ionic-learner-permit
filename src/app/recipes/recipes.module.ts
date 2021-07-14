import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeDetailResolve } from './resolves/recipe-detail.resolve';
import { RecipeListResolve } from './resolves/recipe-list.resolve';

@NgModule({
    imports: [CommonModule, IonicModule, RecipesRoutingModule],
    providers: [RecipeDetailResolve, RecipeListResolve],
})
export class RecipesModule {}
