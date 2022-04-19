import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLedComponent } from './grafica-led.component';

describe('GraficaLedComponent', () => {
  let component: GraficaLedComponent;
  let fixture: ComponentFixture<GraficaLedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaLedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
