import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/card.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input() card: Card;
  
  constructor(private service: CardService) { }

  ngOnInit(): void {
  }

  changeGrade(value: number): void{
    let newCard = new Card(this.card);
    newCard.grade = value;
    this.service.putGrade(newCard).subscribe(x =>{
      this.card = x
    })
  }

}
