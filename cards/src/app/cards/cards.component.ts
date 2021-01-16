import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import { CardsCount } from './model/cards-count';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: CardsCount;
  parameters = {
    page: 1,
    pageSize: 5
  }

  constructor(private service: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(params?: any): void{
    if(params){
      this.parameters.page = params.page || this.parameters.page;
      this.parameters.pageSize = params.pageSize || this.parameters.pageSize;
    }
    this.service.getCards(this.parameters).subscribe(x => {
      this.cards = x;
    })
  }

  changePageSize(value: number): void{
    this.parameters.pageSize = value;
    this.getCards();
  }
}
