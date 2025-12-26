import { TestBed } from '@angular/core/testing';

import { Caption } from './caption';

describe('Caption', () => {
  let service: Caption;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Caption);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
