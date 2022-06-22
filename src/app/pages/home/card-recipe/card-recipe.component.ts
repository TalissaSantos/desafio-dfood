import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CardsHomeService } from 'src/app/services/cards-home.service';
import { CardHome } from 'src/models/cards-interface';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss']
})
export class CardRecipeComponent implements OnInit {

  @Input()  card!: CardHome;

  constructor() {}


  ngOnInit(): void {

  }
}
