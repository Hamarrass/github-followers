import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post={

    isActive : false
  }
  title :any ;
  onFavoriteChange(event:any){
  console.log('hassane ',event.newState);
  };

  course=[];
  viewCours = "laravel";


  tess:any ;

  addElement(){

     this.tess.push({id:6 , title: "hasane"}) ;


  }
  deleteElement(event:any){
       let index = this.tess.indexOf(event);

        this.tess.splice(index,1);
  }

  editElement(event:any){

    event.title = "IS UPDATED";

  }
  trackTess(index:any,tes:any){
     return tes ? tes.id : undefined ;
  }


  load(){
     this.tess= [
      {id:1 , title: "laravel"} ,
      {id:2 , title: "vueJS"} ,
      {id:3 , title: "Symphony"} ,
      {id:4 , title: "React"} ,
      {id:5 , title: "ReactJS"} ,
    ];
  }

  persone= {
    adress:'hassane',
    name:'casae',
    tata:null
  }




}
