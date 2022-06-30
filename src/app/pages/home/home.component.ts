import { Component, OnInit } from '@angular/core';

import { CardsHomeService } from 'src/app/services/cards-home.service';
import { CardHome } from 'src/models/cards-interface';

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
