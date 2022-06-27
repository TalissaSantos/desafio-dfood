import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesNaoEncontradaComponent } from './recipes-nao-encontrada.component';

describe('RecipesNaoEncontradaComponent', () => {
  let component: RecipesNaoEncontradaComponent;
  let fixture: ComponentFixture<RecipesNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesNaoEncontradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
