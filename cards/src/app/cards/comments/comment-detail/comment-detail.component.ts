import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/cards/model/comments';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  @Input() comment: Comment;
  
  constructor() { }

  ngOnInit(): void {
  }

}
