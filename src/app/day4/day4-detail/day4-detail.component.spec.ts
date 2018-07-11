import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4DetailComponent } from './day4-detail.component';

describe('Day4DetailComponent', () => {
  let component: Day4DetailComponent;
  let fixture: ComponentFixture<Day4DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day4DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
