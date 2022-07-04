import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardRecipeComponent } from './card-recipe/card-recipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardRecipeComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule]
})
export class HomeModule {}
