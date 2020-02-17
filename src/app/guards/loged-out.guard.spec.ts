import { TestBed, async, inject } from '@angular/core/testing';

import { LogedOutGuard } from './loged-out.guard';

describe('LogedOutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogedOutGuard]
    });
  });

  it('should ...', inject([LogedOutGuard], (guard: LogedOutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
