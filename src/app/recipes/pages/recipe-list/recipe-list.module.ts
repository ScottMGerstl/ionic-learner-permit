import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RecipeListPageRoutingModule } from './recipe-list-routing.module';
import { RecipeListPage } from './recipe-list.page';

@NgModule({
    imports: [CommonModule, IonicModule, RecipeListPageRoutingModule],
    declarations: [RecipeListPage],
})
export class RecipeListPageModule {}
