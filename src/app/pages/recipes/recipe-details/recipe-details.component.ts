import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CategoriesService } from 'src/app/services/categories.service';
import { Recipe } from 'src/models/recipes-interface';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe?: Recipe;
  id!: string;
  inscricao!: Subscription;

  constructor(private router: Router, private categoriesService: CategoriesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //pra pegar e utilizar apenas uma vez
    this.id = this.route.snapshot.params['id'];

    this.inscricao = this.categoriesService.getRecipeById(this.id)
    .subscribe((recipe) =>  {
      this.recipe = recipe;
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
