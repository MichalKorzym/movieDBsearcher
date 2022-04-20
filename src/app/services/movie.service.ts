import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movies ,RandomMovieInfo} from "../interfaces/movies";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private url = "https://api.themoviedb.org/3/search/movie?api_key="
  private apiKey = "94ef9f8759c54b5037c73ca17bcb1900"
  private urlRandomImage="https://api.themoviedb.org/3/movie/"


  public getMovies(title: string): Observable<Movies>{
    return this.http.get<Movies>(`${this.url}${this.apiKey}&query=${title}`)
  }
  public getRandomMovies(): Observable<RandomMovieInfo>{
    let randomNumber= Math.floor((Math.random()*10)+1);
    // console.log(randomNumber)
    // return this.http.get<Movies>(`${this.urlRandomImage}${100}?api_key=${this.apiKey}&language=null`);
   return this.http.get<RandomMovieInfo>(`https://api.themoviedb.org/3/movie/latest?api_key=${this.apiKey}`);
 
  } 
}
