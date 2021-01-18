import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { Comments, Comment } from '../model/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: number;
  comments: Comments;
  comment: Comment;

  constructor(private service: CardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x =>{
      this.id = x['id'];
      this.getComments();
      this.comment = new Comment();
    })
  }

  getComments(): void{
    this.service.getComments(this.id).subscribe(x =>{
      this.comments = x;
    })
  }

  buttonSubmit(): void{
    this.comment.cards = this.id;
    this.comment.date = (new Date).toISOString();
    this.service.postComment(this.comment).subscribe(x =>{
      this.comment = new Comment();
    })
  }

}
