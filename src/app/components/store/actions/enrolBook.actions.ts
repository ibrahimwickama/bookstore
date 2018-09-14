import {Action} from '@ngrx/store';
import {BooksOnStore} from '../model/booksOnStore';

export const ENROLLBOOK = '[Books] Enroll Book';
export const UPDATEBOOK = '[Books] Update Book';

export class EnrollBookAction implements Action {
  readonly type = ENROLLBOOK;
  constructor(public payload: BooksOnStore ) {

  }
}

export class UpdateBookAction implements Action {
  readonly type = UPDATEBOOK;
  constructor(public payload: number){}
}

export type Actions = EnrollBookAction | UpdateBookAction;
