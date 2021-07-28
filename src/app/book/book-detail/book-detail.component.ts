import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number;

  constructor(private bookService: BookService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit() {
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }
}
