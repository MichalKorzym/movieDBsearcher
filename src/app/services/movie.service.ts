import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Movies } from "../interfaces/movies";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private url = "https://api.themoviedb.org/3/search/movie?api_key=";
  private apiKey = "94ef9f8759c54b5037c73ca17bcb1900";

  public getMovies(title: string): Observable<Movies>{
    return this.http.get<Movies>(`${this.url}${this.apiKey}&query=${title}`)
  }
}
