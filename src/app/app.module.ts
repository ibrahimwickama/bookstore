import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as fromComponents from './components';


import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import {environment, metaReducers, rootReducer} from './components/store/reducers/reducers';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components,
  ],
  imports: [
    BrowserModule, FormsModule,
    StoreModule.forRoot( { booksOnStore: rootReducer }),

    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
