import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';

import { Categories } from 'src/models/categories-interface';
import { Recipe } from 'src/models/recipes-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories!: Categories[];
  recipe?: Recipe;

  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<Categories[]>('assets/dados/mock.json');
  }

  async getCategoryId(id: string): Promise<Categories | undefined> {
    const categories = await firstValueFrom(this.getCategory());

    return categories.find(category => category.categoryId == id);
  }

  getRecipeById(id: string): Observable<Recipe | undefined> {
    return this.getCategory().pipe(
      map((categories: Categories[]) => {
        let recipeSelected: Recipe | undefined;
        categories.some(category => {
          recipeSelected = category.recipes.find(recipe => recipe.id === id);

          return !!recipeSelected;
        });
        return recipeSelected;
      })
    );
  }
}
