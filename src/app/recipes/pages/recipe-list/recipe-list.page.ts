import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { Recipe } from '../../models/recipe.interface';
import { RecipeService } from '../../services/recipe.service';

@Component({
    selector: 'app-recipe-list-page',
    templateUrl: './recipe-list.page.html',
    styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage {
    data: Recipe[];

    constructor(private readonly recipeService: RecipeService) {}

    ionViewWillEnter() {
        this.recipeService
            .getAll()
            .pipe(take(1))
            .subscribe((x) => (this.data = x));
    }
}
