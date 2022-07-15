import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlyLayoutComponent } from './mainly-layout.component';

describe('MainlyLayoutComponent', () => {
  let component: MainlyLayoutComponent;
  let fixture: ComponentFixture<MainlyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlyLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainlyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
