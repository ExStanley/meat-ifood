import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { MET_API } from './../app.api';
import {
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { BaseService } from '../services/base-service.service';

@Injectable({ providedIn: 'root' })
export class RestaurantsService extends BaseService<Restaurant> {
  constructor(private http: HttpClient) {
    super(http, MET_API.url, MET_API.endRestaurants);
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get<any>(`${MET_API.url}/${MET_API.endRestaurants}/${id}/reviews`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MET_API.url}/${MET_API.endRestaurants}/${id}/menu`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

}
