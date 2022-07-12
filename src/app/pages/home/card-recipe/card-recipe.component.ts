import { Component, Input, OnInit } from '@angular/core';
import { CardHome } from 'src/models/cards-interface';
import { Recipe } from 'src/models/recipes-interface';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss']
})
export class CardRecipeComponent implements OnInit {
  @Input() card!: CardHome;
  @Input() recipe!: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
