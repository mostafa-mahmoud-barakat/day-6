import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdMasterComponent } from './orderd-master.component';

describe('OrderdMasterComponent', () => {
  let component: OrderdMasterComponent;
  let fixture: ComponentFixture<OrderdMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderdMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
