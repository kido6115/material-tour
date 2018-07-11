import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2DetailComponent } from './day2-detail.component';

describe('Day2DetailComponent', () => {
  let component: Day2DetailComponent;
  let fixture: ComponentFixture<Day2DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
