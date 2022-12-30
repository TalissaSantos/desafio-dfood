import { Recipe } from './recipes-interface';

export interface Categories {
  categoryId: string,
  category: string;
  id:string;
  recipes: Recipe[];
}
