import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(  private route : Router) { }
  back() {
     this.route.navigate(['followers',12,'idbrahim'],{queryParams :{page:12 ,type:'Admin'}})
  }

  ngOnInit(): void {
  }

}
