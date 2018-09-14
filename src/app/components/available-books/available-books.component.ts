import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/model/AppState';
import {BooksOnStore} from '../store/model/booksOnStore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {

  availableBooks$: Observable<BooksOnStore[]>;

  constructor(private store: Store<AppState>) {
    this.availableBooks$ = this.store.select('booksOnStore');
  }

  ngOnInit() {
  }

}
