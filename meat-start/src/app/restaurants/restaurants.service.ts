import { MET_API } from './../app.api';
import {
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { BaseService } from '../services/base-service.service';

@Injectable({ providedIn: 'root' })
export class RestaurantsService extends BaseService<Restaurant> {
  constructor(http: HttpClient) {
    super(http, MET_API, 'restaurants');
  }
}
