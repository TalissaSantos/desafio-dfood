import { Injectable } from '@angular/core';
import { CardHome } from 'src/models/cards-interface';

@Injectable({
  providedIn: 'root'
})
export class CardsHomeService {


  constructor() {}

  getCards(): CardHome[] {
    return [
      { img: 'assets/image/home_frango.jpg', title: 'frango' },
      { img: 'assets/image/home_carne_vermelha.jpg', title: 'Carne Vermelha' },
      { img: 'assets/image/home_carne_porco.jpg', title: 'Carne de Porco' },
      { img: 'assets/image/home_morango.jpg', title: 'morango' },
      { img: 'assets/image/home_banana.jpg', title: 'banana' },
      { img: 'assets/image/home_limao.jpg', title: 'limao' }
    ];
  }
}
