import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.interface';

@Component({
    selector: 'app-recipe-list-page',
    templateUrl: './recipe-list.page.html',
    styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage implements OnInit {
    data$: Observable<Recipe[]>;

    constructor(private readonly route: ActivatedRoute) {}

    ngOnInit() {
        this.data$ = this.route.snapshot.data.data.data$;
    }
}
