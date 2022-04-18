import { Component, Injectable, OnInit } from '@angular/core';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-site-component',
  templateUrl: './site-component.component.html',
  styleUrls: ['./site-component.component.css']
})
export class SiteComponentComponent implements OnInit {




  nameFilm:string = '';
  name = "Film name..."
  isClicked = false;
  title = 'FilmCOM';
  faVideo = faVideo;

  movies:any;

  // language = 'english';
  // movies:any = [];
 

  //menu  obsluga klikniecia
  handleMenuEvent(){
    this.isClicked= !this.isClicked;
  
  }

  // zbieranie wartosci z inputa
  handleInputMovie(){
    console.log('it does nothing',this.nameFilm);
  }
 


  // nie czaje jak zebrac te wartosci jak wywoluje response.json()
  // to sie jebie
  loadFilm(){
    this.http.get('https://api.themoviedb.org/3/movie/100/images?api_key=94ef9f8759c54b5037c73ca17bcb1900').subscribe((response)=>{
      this.movies = response;
    })
    
  }
 




  constructor(private http: HttpClient){
    this.loadFilm();

  }

  ngOnInit(): void {

    
  }

}
