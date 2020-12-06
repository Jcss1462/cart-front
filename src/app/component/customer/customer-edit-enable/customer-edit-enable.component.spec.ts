import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditEnableComponent } from './customer-edit-enable.component';

describe('CustomerEditEnableComponent', () => {
  let component: CustomerEditEnableComponent;
  let fixture: ComponentFixture<CustomerEditEnableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditEnableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
