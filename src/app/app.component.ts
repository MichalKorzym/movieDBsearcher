
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-header> </app-header> 
  <app-navigation> </app-navigation>
  <app-site-component> </app-site-component> 
  <app-example></app-example>
  <app-footer></app-footer>
    
  `,
  styles: [`


  `]
})
export class AppComponent {
  title = 'filmsSearcher';
  constructor(){


  }

  
}
