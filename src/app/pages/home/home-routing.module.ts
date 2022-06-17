import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/core/header/components/navbar/navbar.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent,

  },
  {
    path:'/inicio',component:NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
