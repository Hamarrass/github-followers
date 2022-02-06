import { CourseService } from './../course.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'course',
  // templateUrl: './course.component.html',
  template: `

  <div class="container m-4">
          <ul class = "list-group">
            <li class="list-group-item"> Title      : {{course.titre | uppercase | lowercase}}</li>
            <li class="list-group-item"> Ratting    : {{course.avis |number:'1.1-1'}}</li>
            <li class="list-group-item"> Students   : {{course.participants}}</li>
            <li class="list-group-item"> Price      : {{course.prix | currency:'MAD':'symbol':'3.1-1' }}</li>
            <li class="list-group-item"> ReleaseDate: {{course.publicationDate | date}}</li>
          </ul>
  </div>
            `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

course = {
  titre           : 'Formation complete sur angular',
  avis            : "4.9762",
  participants    : 136,
  prix: 950.38,
  publicationDate : new Date(2017,11,21)

}


  titles ;

  constructor(courseService:CourseService) {

    this.titles = courseService.getTitles();

  }

  ngOnInit(): void {
  }

}
