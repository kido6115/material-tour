import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Detail2Component } from './day3-detail2.component';

describe('Day3Detail2Component', () => {
  let component: Day3Detail2Component;
  let fixture: ComponentFixture<Day3Detail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3Detail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Detail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
