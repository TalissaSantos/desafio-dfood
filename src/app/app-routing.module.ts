import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/header/components/navbar/navbar.component';

import { HomeModule } from './pages/home/home.module';

// quando o path for vazio joga pro home
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },


]
RouterModule.forRoot([
  {path:'inicio', component: NavbarComponent},
  {path:'receita',component: FooterComponent},
])


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
