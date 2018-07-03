import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPortLineModalComponent } from './air-port-line-modal.component';

describe('AirPortLineModalComponent', () => {
  let component: AirPortLineModalComponent;
  let fixture: ComponentFixture<AirPortLineModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPortLineModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPortLineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
