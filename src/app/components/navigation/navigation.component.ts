import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isClicked: boolean = false;



  constructor() {}

  ngOnInit(): void {}

  //menu  obsluga klikniecia
  handleMenuEvent() {
    this.isClicked = !this.isClicked;

  }

}