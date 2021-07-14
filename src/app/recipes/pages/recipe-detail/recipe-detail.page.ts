import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.interface';
import { RecipeDetailResolveData } from '../../resolves/recipe-detail.resolve';
import { RecipeService } from '../../services/recipe.service';

@Component({
    selector: 'app-recipe-detail-page',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
    item$: Observable<Recipe>;
    id: string;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly recipeService: RecipeService,
        private readonly alertController: AlertController
    ) {}

    ngOnInit() {
        const { data$, id }: RecipeDetailResolveData = this.route.snapshot.data.detail;

        this.item$ = data$;
        this.id = id;
    }

    async onDeleteClick() {
        const alert = await this.alertController.create({
            header: 'Delete Recipe?',
            message: 'Are you sure you want to delete this recipe?',
            buttons: [
                { text: 'Cancel', role: 'cancel' },
                {
                    text: 'Delete',
                    handler: () => {
                        this.recipeService.delete(this.id);
                        this.router.navigate(['/recipes']);
                    },
                },
            ],
        });

        alert.present();
    }
}
