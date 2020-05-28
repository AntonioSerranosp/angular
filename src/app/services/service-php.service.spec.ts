import { TestBed } from '@angular/core/testing';

import { ServicePhpService } from './service-php.service';

describe('ServicePhpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePhpService = TestBed.get(ServicePhpService);
    expect(service).toBeTruthy();
  });
});
