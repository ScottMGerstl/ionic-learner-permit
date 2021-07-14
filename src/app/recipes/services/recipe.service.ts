import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RecipePayload } from '../models/recipe-payload.interface';
import { Recipe } from '../models/recipe.interface';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    private idSeed = 0;
    private data: Recipe[] = [];

    constructor() {
        this.create({
            title: 'Spaghetti',
            imageSrc:
                'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
            ingredients: ['Spaghetti noodles', 'Pasta sauce', 'Basil', 'Asiago'],
        });
        this.create({
            title: 'Margarita Pizza',
            imageSrc: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg',
            ingredients: ['Crust', 'Fresh mozzarella balls', 'Basil', 'Red sauce', 'Sliced tomatoes'],
        });
    }

    getAll() {
        return of([...this.data]);
    }

    getById(id: string) {
        return of({ ...this.data.find((x) => x.id === id) });
    }

    create(data: RecipePayload) {
        const idObject = { id: (++this.idSeed).toString() };

        this.data = [...this.data, { ...data, ...idObject }];
        return of(idObject);
    }

    delete(id: string) {
        this.data = [...this.data.filter((x) => x.id !== id)];
        return of({});
    }
}
