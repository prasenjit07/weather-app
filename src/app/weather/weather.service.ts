import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
import {WeatherComponent} from './weather.component'

@Injectable({
    providedIn:'root'
})

export class WeatherService {
    
    private weatherUrl=`https://api.openweathermap.org/data/2.5`;
  
    constructor(private http:HttpClient){}

    getCurrentWeather(place:string): Observable<any> {
        let newUrl = `${this.weatherUrl}/weather?q=${place}&appid=08cc33040d275c10d098f0e906ced2ef&units=metric`;
        return this.http.get<any>(newUrl).pipe(
            tap((data: any)=>('All: '+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getForecastWeather(place:string): Observable<any> {
        let newUrl=`${this.weatherUrl}/forecast?q=${place}&appid=08cc33040d275c10d098f0e906ced2ef&units=metric`;
        return this.http.get<any>(newUrl).pipe(
            tap((data: any)=>('All: '+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    
    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
    
}