import { TestBed } from '@angular/core/testing';

import { RandomNumberGeneratorService } from './random-number-generator.service';

describe('RandomNumberGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNumberGeneratorService = TestBed.get(RandomNumberGeneratorService);
    expect(service).toBeTruthy();
  });
});
