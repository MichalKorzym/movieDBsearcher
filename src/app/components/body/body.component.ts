import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }


  //obsluga przycisku
  handleClick(){
    window.scroll(0,0);
  }
  ngOnInit(): void {
  }

}
