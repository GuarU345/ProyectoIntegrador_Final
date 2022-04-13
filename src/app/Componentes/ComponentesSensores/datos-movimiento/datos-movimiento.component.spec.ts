import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosMovimientoComponent } from './datos-movimiento.component';

describe('DatosMovimientoComponent', () => {
  let component: DatosMovimientoComponent;
  let fixture: ComponentFixture<DatosMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
