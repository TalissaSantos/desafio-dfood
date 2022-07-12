import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardsHomeService } from 'src/app/services/cards-home.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CardHome } from 'src/models/cards-interface';

import { Categories } from 'src/models/categories-interface';
import { Recipe } from 'src/models/recipes-interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes!: CardHome[];
  inscricao!: Subscription;
  paginaRecipe!: string;
  category!: string;
  card!: any;

  recipeList?: Recipe[];
  categories?: Categories;
  id!: string


  constructor(private cardService: CardsHomeService, private route: ActivatedRoute, private router: Router, private categoriesService: CategoriesService ) {}

  ngOnInit(): void {




this.inscricao = this.route.params.subscribe(async (params: any) =>{
  this.id = params['category'];

  this.categories = await this.categoriesService.getCategor(this.id);
  this.recipeList = this.categories?.recipes;

})

  }



  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
