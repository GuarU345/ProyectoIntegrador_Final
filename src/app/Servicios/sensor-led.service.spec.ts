import { TestBed } from '@angular/core/testing';

import { SensorLedService } from './sensor-led.service';

describe('SensorLedService', () => {
  let service: SensorLedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorLedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
