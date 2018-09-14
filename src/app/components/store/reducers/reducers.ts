import { storeFreeze } from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
import {MetaReducer} from '@ngrx/store';
import {BooksOnStore} from '../model/booksOnStore';
import * as BookStoreActions from '../actions/enrolBook.actions';
export const environment = {
  development: true,
  production: false,
};

const initialState: BooksOnStore = {
  id: 0, name: 'Get Rich', author:  'Wickama', isRented: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

export function rootReducer(state: BooksOnStore[] = [initialState] , action: BookStoreActions.Actions) {

  switch (action.type) {

    case BookStoreActions.ENROLLBOOK:
      const book = action.payload;
      const books = [ ...state , book ];
      return books;

    default:
        return state;
  }
}
