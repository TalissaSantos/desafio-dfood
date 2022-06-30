import { Component, OnInit } from '@angular/core';

interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menus: MenuItem[] = [
    { title: 'Home', link: 'home' },
    { title: 'Crie uma receita', link: 'form' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
