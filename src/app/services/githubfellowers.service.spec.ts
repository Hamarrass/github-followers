import { TestBed } from '@angular/core/testing';

import { GithubfellowersService } from './githubfellowers.service';

describe('GithubfellowersService', () => {
  let service: GithubfellowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubfellowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
