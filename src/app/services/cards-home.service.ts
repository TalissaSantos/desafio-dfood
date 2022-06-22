import { Injectable } from '@angular/core';
import { CardHome } from 'src/models/cards-interface';

@Injectable({
  providedIn: 'root'
})
export class CardsHomeService {


  constructor() {}

  getCards(): CardHome[] {
    return [
      { img: 'assets/image/home_frango2.jpg', title: 'Frango' },
      { img: 'assets/image/home_carne_vermelha.jpg', title: 'Carne Vermelha' },
      { img: 'assets/image/home_carne_porco.jpg', title: 'Carne de Porco' },
      { img: 'assets/image/home_morango.jpg', title: 'Morango' },
      { img: 'assets/image/home_banana2.jpg', title: 'Banana' },
      { img: 'assets/image/home_limoes.jpg', title: 'Limao' },

    ];
  }
}
