import { TestBed } from '@angular/core/testing';

import { UserConnectedGuard } from './user-connected.guard';

describe('UserConnectedGuard', () => {
  let guard: UserConnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
