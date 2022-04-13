import { TestBed } from '@angular/core/testing';

import { SensorGasService } from './sensor-gas.service';

describe('SensorGasService', () => {
  let service: SensorGasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorGasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
