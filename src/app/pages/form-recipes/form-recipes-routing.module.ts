import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRecipesComponent } from './form-recipes.component';

const routes: Routes = [
  {
    path: '',
    component: FormRecipesComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRecipesRoutingModule {}
