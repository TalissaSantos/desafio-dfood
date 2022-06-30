import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRecipesRoutingModule } from './form-recipes-routing.module';
import { FormRecipesComponent } from './form-recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormRecipesComponent],
  imports: [CommonModule, FormRecipesRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [FormRecipesComponent]
})
export class FormRecipesModule {}
