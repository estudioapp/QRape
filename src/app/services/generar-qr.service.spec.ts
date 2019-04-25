import { TestBed, inject } from '@angular/core/testing';

import { GenerarQrService } from './generar-qr.service';

describe('GenerarQrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerarQrService]
    });
  });

  it('should be created', inject([GenerarQrService], (service: GenerarQrService) => {
    expect(service).toBeTruthy();
  }));
});
