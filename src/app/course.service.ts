import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getTitles(): String[] {
    return  ['Synphony','laravel','Angular','React'];
  }
  constructor() { }
}
