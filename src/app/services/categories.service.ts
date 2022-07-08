import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
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

}
