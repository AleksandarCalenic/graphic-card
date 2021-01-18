import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  @Input() totalCount: number;
  @Input() page: number;
  @Input() pageSize: number;
  @Output() changePage = new EventEmitter();
  totalPage: number;

  constructor() { }

  ngOnChanges() {
    this.totalPage = Math.ceil(this.totalCount / this.pageSize);
  }

  updatePage(value: number): void{
    this.page = value;
    this.changePage.emit({"page": value});
  }
}
