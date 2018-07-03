import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4ModalComponent } from './day4-modal.component';

describe('Day4ModalComponent', () => {
  let component: Day4ModalComponent;
  let fixture: ComponentFixture<Day4ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day4ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
