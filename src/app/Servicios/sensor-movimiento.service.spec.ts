import { TestBed } from '@angular/core/testing';

import { SensorMovimientoService } from './sensor-movimiento.service';

describe('SensorMovimientoService', () => {
  let service: SensorMovimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorMovimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
