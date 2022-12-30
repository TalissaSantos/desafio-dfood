import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesNaoEncontradaComponent } from '../../recipes-nao-encontrada/recipes-nao-encontrada.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [RecipesComponent, RecipesNaoEncontradaComponent, RecipeCardsComponent,RecipeDetailsComponent],
  imports: [CommonModule, RecipesRoutingModule],
  exports: [RecipesComponent, RecipeCardsComponent,RecipeDetailsComponent]
})
export class RecipesModule {}
