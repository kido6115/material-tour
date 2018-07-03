import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5ModalComponent } from './day5-modal.component';

describe('Day5ModalComponent', () => {
  let component: Day5ModalComponent;
  let fixture: ComponentFixture<Day5ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
