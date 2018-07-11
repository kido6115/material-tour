import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Detail1Component } from './day3-detail1.component';

describe('Day3Detail1Component', () => {
  let component: Day3Detail1Component;
  let fixture: ComponentFixture<Day3Detail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3Detail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Detail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
