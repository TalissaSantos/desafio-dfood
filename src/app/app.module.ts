import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardsHomeService } from './services/cards-home.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, RouterModule, ReactiveFormsModule,],
  providers: [CardsHomeService],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {}
