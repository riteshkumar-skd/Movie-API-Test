import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movieservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'APITest';
  constructor(private movieservice: MovieService){

  }
  movieName;
  displayMovieDeatails = false;
  finalData = "";
  
  ngOnInit(){
  
  }

  GetMovieDetails(){
    debugger;
    console.log(this.movieName);
    this.movieservice.GetMovieDetails(this.movieName).subscribe(
      data =>{
        this.displayMovieDeatails = true;
        this.finalData = data;        
      }
    )
    
  }
}
