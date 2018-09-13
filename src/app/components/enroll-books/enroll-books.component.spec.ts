import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollBooksComponent } from './enroll-books.component';

describe('EnrollBooksComponent', () => {
  let component: EnrollBooksComponent;
  let fixture: ComponentFixture<EnrollBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
