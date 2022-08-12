import { TestBed } from '@angular/core/testing';

import { WebServiceService } from './api-request.service';

describe('WebServiceService', () => {
  let service: WebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
