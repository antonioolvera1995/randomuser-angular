import { TestBed } from '@angular/core/testing';

import { ApiRandomusersService } from './api-randomusers.service';

describe('ApiRandomusersService', () => {
  let service: ApiRandomusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRandomusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
