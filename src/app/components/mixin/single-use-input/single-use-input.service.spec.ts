import { TestBed } from '@angular/core/testing';

import { SingleUseInputService } from './single-use-input.service';

describe('SingleUseInputService', () => {
  let service: SingleUseInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleUseInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
