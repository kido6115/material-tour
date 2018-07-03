import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2ModalComponent } from './day2-modal.component';

describe('Day2ModalComponent', () => {
  let component: Day2ModalComponent;
  let fixture: ComponentFixture<Day2ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
