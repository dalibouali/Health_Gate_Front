import { TestBed } from '@angular/core/testing';

import { JWTClientService } from './jwtclient.service';

describe('JWTClientService', () => {
  let service: JWTClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
