import { Card } from "./card";

export class CardsCount{
    count: number;
    results: Card[]

    constructor(obj?: any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(x => new Card(x))
    }
}