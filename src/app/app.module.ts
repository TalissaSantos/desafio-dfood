import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardsHomeService } from './services/cards-home.service';
import { FormRecipesComponent } from './pages/form-recipes/form-recipes.component';

@NgModule({
  declarations: [AppComponent, FormRecipesComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, RouterModule],
  providers: [CardsHomeService],
  bootstrap: [AppComponent],
  exports: [
    FormRecipesComponent
  ]
})
export class AppModule {}
