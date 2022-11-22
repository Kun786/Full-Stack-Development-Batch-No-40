import { TestBed } from '@angular/core/testing';

import { UserManagementGuard } from './user-management.guard';

describe('UserManagementGuard', () => {
  let guard: UserManagementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserManagementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
