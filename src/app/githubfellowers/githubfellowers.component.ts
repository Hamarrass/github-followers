import { GithubfellowersService } from './../services/githubfellowers.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'githubfellowers',
  templateUrl: './githubfellowers.component.html',
  styleUrls: ['./githubfellowers.component.css']
})
export class GithubfellowersComponent implements OnInit {

  followers: any = [];

  constructor(private githubfellowersService : GithubfellowersService) { }

  ngOnInit(): void {

    this.getFollowers();

  }

  getFollowers() {
      this.githubfellowersService.getall()
      .subscribe(followers => {
         this.followers = followers ;
      });
 }

}
