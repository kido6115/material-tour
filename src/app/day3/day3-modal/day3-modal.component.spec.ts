import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3ModalComponent } from './day3-modal.component';

describe('Day3ModalComponent', () => {
  let component: Day3ModalComponent;
  let fixture: ComponentFixture<Day3ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
