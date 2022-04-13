import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaGasComponent } from './grafica-gas.component';

describe('GraficaGasComponent', () => {
  let component: GraficaGasComponent;
  let fixture: ComponentFixture<GraficaGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaGasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
