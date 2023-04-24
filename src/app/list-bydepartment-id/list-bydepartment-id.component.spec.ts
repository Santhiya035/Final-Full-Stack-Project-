import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBydepartmentIdComponent } from './list-bydepartment-id.component';

describe('ListBydepartmentIdComponent', () => {
  let component: ListBydepartmentIdComponent;
  let fixture: ComponentFixture<ListBydepartmentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBydepartmentIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBydepartmentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
