import { TestBed } from '@angular/core/testing';

import { ImgsService } from './imgs.service';

describe('ImgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgsService = TestBed.get(ImgsService);
    expect(service).toBeTruthy();
  });
});
