import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.interface';
import { RecipeService } from '../services/recipe.service';

@Injectable()
export class RecipeDetailResolve implements Resolve<RecipeDetailResolveData> {
    constructor(private readonly recipeService: RecipeService) {}

    resolve(snapshot: ActivatedRouteSnapshot) {
        const id = snapshot.paramMap.get('id');

        return {
            id,
            data$: this.recipeService.getById(id),
        };
    }
}

export interface RecipeDetailResolveData {
    id: string;
    data$: Observable<Recipe>;
}
