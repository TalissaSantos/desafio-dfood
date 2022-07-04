import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRecipesRoutingModule } from './form-recipes-routing.module';
import { FormRecipesComponent } from './form-recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CategoriesService } from 'src/app/services/categories.service';



@NgModule({
  declarations: [FormRecipesComponent],
  imports: [CommonModule, FormRecipesRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [FormRecipesComponent],
  providers: [CategoriesService]
})
export class FormRecipesModule {}
