import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfellowersComponent } from './githubfellowers.component';

describe('GithubfellowersComponent', () => {
  let component: GithubfellowersComponent;
  let fixture: ComponentFixture<GithubfellowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubfellowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubfellowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
