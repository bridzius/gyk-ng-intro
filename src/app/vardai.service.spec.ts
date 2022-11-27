import { TestBed } from '@angular/core/testing';

import { VardaiService } from './vardai.service';

describe('VardaiService', () => {
  let service: VardaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VardaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
