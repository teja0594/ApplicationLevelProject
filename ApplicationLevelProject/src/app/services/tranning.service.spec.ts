import { TestBed } from '@angular/core/testing';

import { TranningService } from './tranning.service';

describe('TranningService', () => {
  let service: TranningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
