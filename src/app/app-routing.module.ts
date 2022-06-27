import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './pages/home/home.module';
import { RecipesModule } from './pages/recipes/recipes.module';

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
    path:'recipes',
    loadChildren: ( ) => RecipesModule

  }


]
// RouterModule.forRoot([
//   {path:'inicio', component: NavbarComponent},
//   {path:'receita',component: FooterComponent},
// ])


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
