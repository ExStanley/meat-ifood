import { environment } from './../../environments/environment.prod';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import EntityBase from '../models/base.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends EntityBase> {
  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'token'
    }),
  };

  get(search?: string): Observable<T[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().set('q', search)
    }
    // search = (typeof search === 'undefined')? '' : search
    return this.httpClient
      .get<T[]>(`${this.url}/${this.endpoint}`, {params: params})
      .pipe(retry(environment.retray));
  }

  getById(id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.url}/${this.endpoint}/${id}`)
      .pipe(retry(environment.retray));
  }

  create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(
        `${this.url}/${this.endpoint}`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(environment.retray));
  }

  update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(
        `${this.url}/${this.endpoint}/${item.id}`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(environment.retray));
  }

  delete(item: T) {
    return this.httpClient
      .delete<T>(`${this.url}/${this.endpoint}/${item.id}`, this.httpOptions)
      .pipe(retry(environment.retray));
  }

  // public handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';

  //   if (error.error instanceof ErrorEvent) {
  //     //error client
  //     errorMessage = error.error.message;
  //   } else {
  //     //error server
  //     errorMessage =
  //       `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
  //   }

  //   return throwError(errorMessage);
  // }
}
