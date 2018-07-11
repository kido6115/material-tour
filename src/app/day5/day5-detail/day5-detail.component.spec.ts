import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5DetailComponent } from './day5-detail.component';

describe('Day5DetailComponent', () => {
  let component: Day5DetailComponent;
  let fixture: ComponentFixture<Day5DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
