import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {  RandomMovieInfo } from 'src/app/interfaces/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  
  
  latestMovieSubscription:Subscription = new Subscription() ;
  latestMovie!: RandomMovieInfo ;
  image:string ='';
  constructor(private movieService: MovieService) {

   }

  ngOnInit(): void {
     

    this.latestMovieSubscription=this.movieService.getRandomMovies().subscribe(randomImage => {
      console.log(randomImage);
     this.latestMovie = randomImage;
    })

}


  ngOnDestroy(): void {
   this.latestMovieSubscription.unsubscribe();
    
  }

}
