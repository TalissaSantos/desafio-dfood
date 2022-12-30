import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRecipesRoutingModule } from './form-recipes-routing.module';
import { FormRecipesComponent } from './form-recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CategoriesService } from 'src/app/services/categories.service';
import { ControlErroComponent } from './control-erro/control-erro.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [FormRecipesComponent,ControlErroComponent],
  imports: [MatIconModule,CommonModule, FormRecipesRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [FormRecipesComponent,ControlErroComponent],
  providers: [CategoriesService]
})
export class FormRecipesModule {}
