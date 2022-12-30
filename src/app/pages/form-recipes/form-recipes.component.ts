import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from 'src/models/categories-interface';

interface FileEvent extends EventTarget {
  files?: File[];
}



@Component({
  selector: 'app-form-recipes',
  templateUrl: './form-recipes.component.html',
  styleUrls: ['./form-recipes.component.scss']
})
export class FormRecipesComponent implements OnInit {

  form!: FormGroup;
  categories!: Categories[];
  submitted = false;
  ingredients = new FormArray([new FormControl('', Validators.required)]);

  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category: [null, Validators.required],

      image: [null, Validators.required],
      recipe: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(35)]],
      createdBy: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      revenue: [null, [Validators.required, Validators.minLength(5)]],
      preparationTime: [null, [Validators.required, Validators.minLength(5)]],
      ingredients: this.ingredients,
      methodOfPreparation: [null, Validators.required]
    });

    this.form.get('image')?.valueChanges.subscribe({
      next: value => {

      }
    });

    this.categoriesService.getCategory().subscribe({
      next: dados => (this.categories = dados)
    });
  }

  verificaValidTouched(campo: string) {
    return !this.form.get(campo)?.valid && (this.form.get(campo)?.touched || this.form.get(campo)?.dirty);
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      alert('Receita salva!');
      this.submitted = true;
      this.form.reset();
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

  onAdd() {
    this.ingredients.push(new FormControl('', Validators.required));
  }

  onRemove(i: number) {
    this.ingredients.removeAt(i);
  }

  fileUpload(event: FileEvent | null) {
    if (event && event.files && event.files.length > 0) {
      console.log(event?.files[0]);
    }
  }
}
