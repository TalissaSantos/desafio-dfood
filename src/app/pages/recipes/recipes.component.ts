import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardsHomeService } from 'src/app/services/cards-home.service';
import { CardHome } from 'src/models/cards-interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes!: CardHome[];
  inscricao!: Subscription;
  paginaRecipe!: string;
  category!: string;
  card!: any;

  constructor(private cardService: CardsHomeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.cardService.getCards();

    this.inscricao = this.route.params.subscribe((params: any) => {
      this.category = params['category'];

      this.card = this.cardService.getCard(this.category);

      if (this.card == null) {
        this.router.navigate(['/recipes/naoEncontrado']);
      }
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
