import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroExcelComponent } from './filtro-excel.component';

describe('FiltroExcelComponent', () => {
  let component: FiltroExcelComponent;
  let fixture: ComponentFixture<FiltroExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
