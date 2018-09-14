import { Component, OnInit } from '@angular/core';
import {BooksOnStore} from '../store/model/booksOnStore';
import {Store} from '@ngrx/store';
import {AppState} from '../store/model/AppState';
import {EnrollBookAction} from '../store/actions/enrolBook.actions';

@Component({
  selector: 'app-enroll-books',
  templateUrl: './enroll-books.component.html',
  styleUrls: ['./enroll-books.component.css']
})
export class EnrollBooksComponent implements OnInit {

  bookOnstore: BooksOnStore = {
    id: 0,
    name: '',
    author: '',
    isRented: false
};
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

  }

  addBookStore() {
    this.store.dispatch( new EnrollBookAction(this.bookOnstore));
  }

}
