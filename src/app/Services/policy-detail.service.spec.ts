import { TestBed } from '@angular/core/testing';

import { PolicyDetailService } from './policy-detail.service';

describe('PolicyDetailService', () => {
  let service: PolicyDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
