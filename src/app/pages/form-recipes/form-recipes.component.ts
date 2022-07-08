import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from 'src/models/categories-interface';
import { Recipe } from 'src/models/recipes-interface';

@Component({
  selector: 'app-form-recipes',
  templateUrl: './form-recipes.component.html',
  styleUrls: ['./form-recipes.component.scss']
})
export class FormRecipesComponent implements OnInit {
  form!: FormGroup;
  categories!: Categories[];
  submitted = false;
  ingredients = new FormArray([new FormControl('',Validators.required)])


  onAdd(){
    this.ingredients.push(new FormControl('',Validators.required));
  }

  onRemove(i:number){
this.ingredients.removeAt(i);
  }
  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category: [null, Validators.required],

      image: [null, Validators.required],
      recipe: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(35)]],
      createdBy: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      serves: [null, [Validators.required, Validators.minLength(5)]],
      preparationTime: [null, [Validators.required, Validators.minLength(5)]],
      ingredients: this.buildIngredients(),
      methodOfPreparation: [null, Validators.required]
    });

    this.categoriesService.getCategory().subscribe({
      next: dados => (this.categories = dados)
    });
  }

  verificaValidTouched(campo: string) {
    return !this.form.get(campo)?.valid && (this.form.get(campo)?.touched || this.form.get(campo)?.dirty);
  }

  //formArray ingredientes
  buildIngredients() {}

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('ok');

    } else {
      Object.keys(this.form.controls).forEach(campo => {
        console.log(campo);
        const controle = this.form.get(campo);
        controle?.markAsDirty();
      });

    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
