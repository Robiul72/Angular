import { TestBed } from '@angular/core/testing';

import { OwnerServicesService } from './owner-services.service';

describe('OwnerServicesService', () => {
  let service: OwnerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
