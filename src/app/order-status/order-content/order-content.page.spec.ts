import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderContentPage } from './order-content.page';

describe('OrderContentPage', () => {
  let component: OrderContentPage;
  let fixture: ComponentFixture<OrderContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
