import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input() text: string;
  @Input() textSize: number;
  showMore: boolean = true;
  textToShow: string;

  constructor() { }

  ngOnInit(): void {
    this.toggle();
  }

  toggle(){
    this.showMore = !this.showMore;
    if(this.showMore || this.text.length < this.textSize){
      this.textToShow = this.text;
    } else {
      this.textToShow = this.text.substr(0, this.textSize) + "...";
    }
  }

}
