import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {




  constructor(HttpClient: HttpClient) {

    super('https://jsonplaceholder.typicode.com/posts' ,HttpClient)

  }



}
