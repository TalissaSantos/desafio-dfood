import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menus: string[] = ['Home', 'Crie uma receita'];

  constructor() {}

  ngOnInit(): void {}
}
