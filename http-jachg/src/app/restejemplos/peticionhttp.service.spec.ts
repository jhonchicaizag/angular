import { TestBed } from '@angular/core/testing';

import { PeticionhttpService } from './peticionhttp.service';

describe('PeticionhttpService', () => {
  let service: PeticionhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
