import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from 'src/models/recipes-interface';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.scss']
})
export class RecipeCardsComponent implements OnInit {
  @Input() recipe!: Recipe;


  constructor() {}

  ngOnInit() {}
}
