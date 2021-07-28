import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';
import { BookDeleteComponent } from './book/book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookDetailComponent,
    BookUpdateComponent,
    BookDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
