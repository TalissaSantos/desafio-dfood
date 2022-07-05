import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormValidations } from 'src/app/services/form-validations';
import { Categories } from 'src/models/categories-interface';

@Component({
  selector: 'app-form-recipes',
  templateUrl: './form-recipes.component.html',
  styleUrls: ['./form-recipes.component.scss']
})
export class FormRecipesComponent implements OnInit {
  form!: FormGroup;
  categories!: Categories[];

  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category: [null, [FormValidations.equalsTo('category')]],
      image: [null, Validators.required],
      recipe: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(35)]],
      createdBy: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      serves: [null, [Validators.required, Validators.minLength(5)]],
      preparationTime: [null, [Validators.required, Validators.minLength(5)]],
      ingredients: this.buildIngredients(),
      methodOfPreparation: this.buildMethodOfPreparations()
    });

    this.categoriesService.getCategory().subscribe({
      next: dados => (this.categories = dados)
    });
  }


  verificaValidTouched(campo: string) {
    return (
      !this.form.get(campo)?.valid &&
      !!this.form.get(campo)?.touched
    );
  }

  //formArray ingredientes
  buildIngredients() {}
  //formArray modo de preparo
  buildMethodOfPreparations() {}

  onSubmit() {
    console.log(this.form.value);
  }
  onCancel() {
    this.form.reset();
    confirm('Deseja cancelar?');
  }
}
