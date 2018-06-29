import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPortLineComponent } from './air-port-line.component';

describe('AirPortLineComponent', () => {
  let component: AirPortLineComponent;
  let fixture: ComponentFixture<AirPortLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPortLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPortLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
