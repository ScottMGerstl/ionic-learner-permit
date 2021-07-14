import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.interface';
import { RecipeService } from '../services/recipe.service';

@Injectable()
export class RecipeListResolve implements Resolve<RecipeListResolveData> {
    constructor(private readonly recipeService: RecipeService) {}

    resolve() {
        return {
            data$: this.recipeService.getAll(),
        };
    }
}

export interface RecipeListResolveData {
    data$: Observable<Recipe[]>;
}
