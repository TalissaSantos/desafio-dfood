import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRecipesModule } from './pages/form-recipes/form-recipes.module';

import { HomeModule } from './pages/home/home.module';
import { RecipesModule } from './pages/recipes/recipes.module';
import { RecipesNaoEncontradaComponent } from './recipes-nao-encontrada/recipes-nao-encontrada.component';

// quando o path for vazio joga pro home
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    loadChildren: () => RecipesModule
  },

  {
    path: 'form',
    loadChildren: () => FormRecipesModule
  },
  {
    path: '**',
    component: RecipesNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
