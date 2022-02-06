import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(@Inject(String) private ListUrl: string , private HttpClient: HttpClient) { }


  getall() {

    return this.HttpClient.get(this.ListUrl)

  }


  create(resource: any) {
    return this.HttpClient.post(this.ListUrl, resource)
     .pipe(
          catchError((error: Response) => {
            if (error.status === 400)
              return throwError(() => new BadInput(error));
            return throwError(() => new AppError(error));
          })
        );
  }


  Update(resource: any) {
    return this.HttpClient.put(this.ListUrl + '/' + resource.id, resource)
  }


  delete(resource:any) {
    return this.HttpClient.delete(this.ListUrl + '/' + resource.id)
      .pipe(
          catchError((error: Response) => {
            if (error.status === 404)
              return throwError(() => new NotFoundError(error));
            return throwError(() => new AppError(error));
          })
        );
  }



}
