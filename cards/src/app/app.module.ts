import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ErrorComponent } from './core/error/error.component';
import { PaginationComponent } from './cards/pagination/pagination.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';
import { CommentsComponent } from './cards/comments/comments.component';
import { CommentDetailComponent } from './cards/comments/comment-detail/comment-detail.component';
import { ShowMoreComponent } from './cards/show-more/show-more.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardsComponent,
    ErrorComponent,
    PaginationComponent,
    CardDetailComponent,
    CommentsComponent,
    CommentDetailComponent,
    ShowMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
