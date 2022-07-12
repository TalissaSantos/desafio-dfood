import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesNaoEncontradaComponent } from '../../recipes-nao-encontrada/recipes-nao-encontrada.component';
import { CardsHomeService } from 'src/app/services/cards-home.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FormRecipesComponent } from '../form-recipes/form-recipes.component';

@NgModule({
  declarations: [RecipesComponent, RecipesNaoEncontradaComponent,RecipeDetailsComponent],
  imports: [CommonModule, RecipesRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [RecipesComponent],
  providers: [CardsHomeService]
})
export class RecipesModule {}
