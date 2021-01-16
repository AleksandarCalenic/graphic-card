import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ErrorComponent } from './core/error/error.component';
import { CommentsComponent } from './cards/comments/comments.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"cards", component: CardsComponent,
  children: [
    {
      path:":id/comments", 
      component: CommentsComponent
    }
  ]},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
