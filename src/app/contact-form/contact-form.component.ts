import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  test(firstname:any){
     console.log(firstname);
  }
  submit(event:any){
    console.log(event.value.gender);
  }

  contactMethods = [{'id':'1','name':'email'},{'id':'2','name':'facebook'},{'id':'3','name':'tele'},{'id':'4','name':'LinkedIn'}]

  constructor() { }

  ngOnInit(): void {
  }

}
