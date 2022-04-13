import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTemYHumComponent } from './datos-tem-yhum.component';

describe('DatosTemYHumComponent', () => {
  let component: DatosTemYHumComponent;
  let fixture: ComponentFixture<DatosTemYHumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosTemYHumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosTemYHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
