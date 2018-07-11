import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Detail1Component } from './day2-detail1.component';

describe('Day2Detail1Component', () => {
  let component: Day2Detail1Component;
  let fixture: ComponentFixture<Day2Detail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Detail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Detail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
