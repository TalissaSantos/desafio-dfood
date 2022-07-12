import { Recipe } from './recipes-interface';

export interface Categories {
  category: string;
  categoryId: string,
  recipes: Recipe[];
}
