import { TestBed } from '@angular/core/testing';

import { ArtCardService } from './art-card.service';

describe('ArtCardService', () => {
  let service: ArtCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
