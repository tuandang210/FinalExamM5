import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {BookUpdateComponent} from './book/book-update/book-update.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';


const routes: Routes = [{
  path: 'books',
  component: BookCreateComponent
}, {
  path: '',
  component: BookListComponent
}, {
  path: 'books/:id',
  component: BookDetailComponent
}, {
  path: 'books/edit/:id',
  component: BookUpdateComponent
}, {
  path: 'books/delete/:id',
  component: BookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
