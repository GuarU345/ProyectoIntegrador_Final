import { TestBed } from '@angular/core/testing';

import { InterceptorCerrarSesionService } from './interceptor-cerrar-sesion.service';

describe('InterceptorCerrarSesionService', () => {
  let service: InterceptorCerrarSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorCerrarSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
