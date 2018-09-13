import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentBooksComponent } from './rent-books.component';

describe('RentBooksComponent', () => {
  let component: RentBooksComponent;
  let fixture: ComponentFixture<RentBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
