import { TestBed } from '@angular/core/testing';

import { BusinessownerService } from './business-owner.service';

describe('BusinessOwnerService', () => {
  let service: BusinessownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
