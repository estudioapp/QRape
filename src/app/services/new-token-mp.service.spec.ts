import { TestBed, inject } from '@angular/core/testing';

import { NewTokenMPService } from './new-token-mp.service';

describe('NewTokenMPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewTokenMPService]
    });
  });

  it('should be created', inject([NewTokenMPService], (service: NewTokenMPService) => {
    expect(service).toBeTruthy();
  }));
});
