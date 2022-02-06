import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {


  @Input('app-isActive') isActive: boolean  =true;

  @Output('pressHere') change=  new EventEmitter();

  clickStar(){

     this.isActive = !this.isActive;
     this.change.emit({newState : this.isActive});

  }

  constructor() { }

  ngOnInit(): void {
  }

}
