import { TestBed, inject } from '@angular/core/testing';

import { EmprendedoresService } from './emprendedores.service';

describe('EmprendedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmprendedoresService]
    });
  });

  it('should be created', inject([EmprendedoresService], (service: EmprendedoresService) => {
    expect(service).toBeTruthy();
  }));
});
