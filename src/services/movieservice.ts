import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';



@Inject(
    MovieService  
)

export class MovieService {

     constructor(private http: HttpClient){

     }

    public GetMovieDetails(movieName: string): Observable<any>{
         //return new Observable<any>();
         let url = "https://gateway.marvel.com/v1/public/characters?nameStartsWith="+movieName+"&apikey=6871af630ca51742153d2db8dbf10dcb&hash=609bb5211dbf0e54c53e927bb92f5ee7&ts=1";         
         return this.http.get<any>(url);
            // .map(data => {
            //     return data;
            // });
        
    }
}