import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Categories } from 'src/models/categories-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories!: Categories[];


  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<Categories[]>('assets/dados/mock.json')

  }


  async getCategor(id: string): Promise<Categories | undefined>{
    const categories = await firstValueFrom(this.getCategory());

    return categories.find(category => category.categoryId == id);

}
}
