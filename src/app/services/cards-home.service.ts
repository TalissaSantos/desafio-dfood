import { Injectable } from '@angular/core';
import { CardHome } from 'src/models/cards-interface';

@Injectable({
  providedIn: 'root'
})
export class CardsHomeService {
  constructor() {}

  getCards(): CardHome[] {
    return [
      { category: 'frango', img: 'assets/image/home_frango2.jpg', title: 'Frango' },
      { category: 'carne_vermelha', img: 'assets/image/home_carne_vermelha.jpg', title: 'Carne Vermelha' },
      { category: 'carne_porco', img: 'assets/image/home_carne_porco.jpg', title: 'Carne de Porco' },
      { category: 'morango', img: 'assets/image/home_morango.jpg', title: 'Morango' },
      { category: 'banana', img: 'assets/image/home_banana2.jpg', title: 'Banana' },
      { category: 'limao', img: 'assets/image/home_limoes.jpg', title: 'Limao' }
    ];
  }

  getCard(cartegory: string) {
    let cards = this.getCards();

    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      if (card.category == cartegory) {
        return card;
      }
    }
    return null;
  }
}
