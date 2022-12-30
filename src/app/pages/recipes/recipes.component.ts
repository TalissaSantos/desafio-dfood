import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from 'src/models/categories-interface';
import { Recipe } from 'src/models/recipes-interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipeList?: Recipe[];
  categories?: Categories;

  id!: string;

  constructor(public route: ActivatedRoute, public router: Router, public categoriesService: CategoriesService) {}

  async ngOnInit() {
    this.id = this.route.snapshot.queryParams['category'];

    this.categories = await this.categoriesService.getCategoryId(this.id);
    console.log(this.categories, 'mok');
    if (!this.categories) {
      this.router.navigate(['/naoencontrado']);
    }

    this.recipeList = this.categories?.recipes;
  }
}
