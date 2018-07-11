import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Detail1Component } from './day5-detail1.component';

describe('Day5Detail1Component', () => {
  let component: Day5Detail1Component;
  let fixture: ComponentFixture<Day5Detail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5Detail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Detail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
