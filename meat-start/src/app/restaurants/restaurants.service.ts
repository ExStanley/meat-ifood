import { MET_API } from './../app.api';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get<Restaurant[]>(`${MET_API}/restaurants`)
      .pipe(
        retry(2),
        catchError(ErrorHandler.handleError)
      );
  }
}
