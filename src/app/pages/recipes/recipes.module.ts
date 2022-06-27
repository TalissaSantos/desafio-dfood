import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesNaoEncontradaComponent } from './recipes-nao-encontrada/recipes-nao-encontrada.component';
import { CardsHomeService } from 'src/app/services/cards-home.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipesComponent, RecipesNaoEncontradaComponent],
  imports: [CommonModule, RecipesRoutingModule, FormsModule],
  exports: [RecipesComponent, RecipesNaoEncontradaComponent],
  providers: [CardsHomeService]
})
export class RecipesModule {}
