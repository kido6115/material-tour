import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPortLineModal2Component } from './air-port-line-modal2.component';

describe('AirPortLineModal2Component', () => {
  let component: AirPortLineModal2Component;
  let fixture: ComponentFixture<AirPortLineModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPortLineModal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPortLineModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
