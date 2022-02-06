import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class GithubfellowersService  extends DataService {

 constructor(HttpClient: HttpClient) {

    super('https://api.github.com/users/IDBRAHIMDEV/followers' ,HttpClient)

 }



}
