import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGasComponent } from './datos-gas.component';

describe('DatosGasComponent', () => {
  let component: DatosGasComponent;
  let fixture: ComponentFixture<DatosGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosGasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
