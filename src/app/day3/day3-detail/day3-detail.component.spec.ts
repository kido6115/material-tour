import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3DetailComponent } from './day3-detail.component';

describe('Day3DetailComponent', () => {
  let component: Day3DetailComponent;
  let fixture: ComponentFixture<Day3DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
