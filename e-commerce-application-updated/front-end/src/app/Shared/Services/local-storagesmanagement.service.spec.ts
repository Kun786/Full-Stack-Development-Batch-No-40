import { TestBed } from '@angular/core/testing';

import { LocalStoragesmanagementService } from './local-storagesmanagement.service';

describe('LocalStoragesmanagementService', () => {
  let service: LocalStoragesmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoragesmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
