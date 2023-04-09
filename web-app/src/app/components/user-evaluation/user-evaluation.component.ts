import { User_review, date } from './user_review';
import { Component } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { ListaAtracoesPageComponent } from 'src/app/pages/lista-atracoes-page/lista-atracoes-page.component';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-user-evaluation',
  templateUrl: './user-evaluation.component.html',
  styleUrls: ['./user-evaluation.component.scss','./user-make-review.component.scss']
})
export class UserEvaluationComponent {
  createReview: boolean = false;

  today: date = {
    day : 8,
    month: "april",
    year: 2022
  };
  
  comentario: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  reviews: User_review[] = [
    {   nome:"Joao",
        country: "Brazil",
        comment: this.comentario,
        date_of_comment: this.today,
    },
    {   nome:"Ana",
        country: "Argentina",
        comment: this.comentario,
        date_of_comment: this.today,
    },
    {   nome:"Lucas",
        country: "Eua",
        comment: this.comentario,
        date_of_comment: this.today,
    },
    {   nome:"Chang",
        country: "China",
        comment: this.comentario,
        date_of_comment: this.today,
    }
  ];

  ratingValue: number = 0;
  ratingCleanValue: number = 0;
  ratingFunnyValue: number = 0;
  ratingSecurityValue: number = 0;

  openCloseReview(): void{
    this.createReview = !this.createReview;
  }

}
