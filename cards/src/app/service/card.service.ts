import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsCount } from '../cards/model/cards-count';
import { map } from 'rxjs/operators';
import { Card } from '../cards/model/card';

const baseurl = "http://localhost:3000/api/cards/";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards(params?: any): Observable<CardsCount>{
    let queryParams = {};
    if(params){
      queryParams = {
        params: new HttpParams()
        .set('page', params.page || 1)
        .set('pageSize', params.pageSize || 5)
      }
    }
    return this.http.get(baseurl, queryParams).pipe(map(x =>{
      return new CardsCount(x);
    }))
  }

  putGrade(card: Card): Observable<Card>{
    return this.http.put(baseurl + card._id, card).pipe(map(x =>{
      return new Card(x);
    }))
  }
}
