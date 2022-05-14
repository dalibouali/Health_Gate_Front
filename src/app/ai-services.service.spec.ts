import { TestBed } from '@angular/core/testing';

import { AIServicesService } from './_services/ai-services.service';

describe('AIServicesService', () => {
  let service: AIServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
