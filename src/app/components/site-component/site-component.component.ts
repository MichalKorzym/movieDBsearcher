import {Component, Injectable, Input, OnDestroy, OnInit} from '@angular/core';
import {Movies, MovieInfo} from "../../interfaces/movies";
import {MovieService} from "../../services/movie.service";
import {FormControl} from "@angular/forms";
import {debounceTime, filter, Subject, Subscriber, Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-site-component',
  templateUrl: './site-component.component.html',
  styleUrls: ['./site-component.component.css']
})
export class SiteComponentComponent implements OnInit, OnDestroy {
  search: FormControl = new FormControl(''); 
  moviesSubrscription:Subscription = new Subscription() ;
  
  isLoaded: boolean = false;
  movies: MovieInfo[] = [];
  originalMovies: MovieInfo[] = [];

  constructor(private movieService: MovieService){
  }

  ngOnInit(): void {
   this.moviesSubrscription = this.search.valueChanges
    .pipe(debounceTime(1000))
        .subscribe(title => {
          this.isLoaded = false;
          if(title !=''){
          this.movieService.getMovies(title).subscribe(movie => {
            this.movies = movie.results.filter(result => result.backdrop_path);
            //zapisanie oryginalnej tablicy filmow aby moc wyswietlic ja po odznaczeniu opcji jezyka polskiego
            console.log(movie);
            this.originalMovies = [...this.movies];
            this.isLoaded = true;
          })
        }
        else{
          this.movies= [];
          this.isLoaded =true;
        }
    })
     
  }
  //obsluga filtrowania filmow w jezyku polskim
  langSelect(language:Event):void{
    const checkboxElement = language.target as HTMLInputElement;

  if(checkboxElement.checked)
    this.movies = this.movies.filter(movie => movie.original_language === checkboxElement.value);
    else
    this.movies = this.originalMovies;
   
  }
  

  ngOnDestroy() {
    this.moviesSubrscription.unsubscribe();
  }



}
