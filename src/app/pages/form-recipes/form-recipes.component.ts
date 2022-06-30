import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-form-recipes',
  templateUrl: './form-recipes.component.html',
  styleUrls: ['./form-recipes.component.scss']
})
export class FormRecipesComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private recipeService: RecipesService) {
    this.form = this.formBuilder.group({
      category: [null],
      image: [null],
      recipe: [null],
      createdBy: [null],
      serves: [null],
      preparationTime: [null],
      ingredients: [null],
      methodOfPreparation: [null]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.recipeService.save( this.form.value)
    console.log(this.form.value);
  }
  onCancel() {}
}
