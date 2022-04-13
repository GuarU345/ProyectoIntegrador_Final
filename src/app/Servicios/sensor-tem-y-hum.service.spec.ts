import { TestBed } from '@angular/core/testing';

import { SensorTemYHumService } from './sensor-tem-y-hum.service';

describe('SensorTemYHumService', () => {
  let service: SensorTemYHumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorTemYHumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
