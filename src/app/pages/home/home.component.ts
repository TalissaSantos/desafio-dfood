import { Component, OnInit } from '@angular/core';

import { CardsHomeService } from 'src/app/services/cards-home.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CardHome } from 'src/models/cards-interface';
import { Recipe } from 'src/models/recipes-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards!: CardHome[];

  constructor(private cardService: CardsHomeService) {}

  ngOnInit(): void {


    this.cards = this.cardService.getCards();
  }
}
