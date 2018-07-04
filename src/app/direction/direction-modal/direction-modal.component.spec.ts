import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionModalComponent } from './direction-modal.component';

describe('DirectionModalComponent', () => {
  let component: DirectionModalComponent;
  let fixture: ComponentFixture<DirectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
