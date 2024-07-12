import { TestBed } from '@angular/core/testing';

import { CarritoCamisetaService } from './carrito-camiseta.service';

describe('CarritoCamisetaService', () => {
  let service: CarritoCamisetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoCamisetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
