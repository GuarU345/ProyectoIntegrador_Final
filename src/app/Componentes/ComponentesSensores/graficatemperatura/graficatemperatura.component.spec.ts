import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficatemperaturaComponent } from './graficatemperatura.component';

describe('GraficatemperaturaComponent', () => {
  let component: GraficatemperaturaComponent;
  let fixture: ComponentFixture<GraficatemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficatemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficatemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
