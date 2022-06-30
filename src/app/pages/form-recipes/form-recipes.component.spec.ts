import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecipesComponent } from './form-recipes.component';

describe('FormRecipesComponent', () => {
  let component: FormRecipesComponent;
  let fixture: ComponentFixture<FormRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
