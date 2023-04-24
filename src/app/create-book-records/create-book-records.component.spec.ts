import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookRecordsComponent } from './create-book-records.component';

describe('CreateBookRecordsComponent', () => {
  let component: CreateBookRecordsComponent;
  let fixture: ComponentFixture<CreateBookRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBookRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
