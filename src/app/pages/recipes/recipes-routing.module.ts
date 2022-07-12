import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesNaoEncontradaComponent } from '../../recipes-nao-encontrada/recipes-nao-encontrada.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: 'naoEncontrado',
    component: RecipesNaoEncontradaComponent
  },
  {
    path: '',
    redirectTo: 'naoEncontrado',
    pathMatch: 'full'
  },
  {
    path: ':category',
    component: RecipesComponent
  },
  {
    path: ':id',
    component: RecipeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
