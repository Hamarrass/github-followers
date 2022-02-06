import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {
maLimit: any;
  transform(value: any, limit?: any ): any {
    if(!value){

        return null;

    }

    this.maLimit = (limit)? limit : 10 ;


    return value.substr(0,this.maLimit) + '......';
  }

}
