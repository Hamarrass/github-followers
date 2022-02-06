import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
  username: any;
  login: any;
  query: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

        this.username= this.route.snapshot.paramMap.get('username');
        this.login = this.route.snapshot.paramMap.get('login');

        this.query =  this.route.snapshot.queryParamMap


  }


}
