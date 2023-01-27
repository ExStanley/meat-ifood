import { NavigationEnd, Router } from '@angular/router';
import { MET_API } from './../../app.api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  user: User
  lastUrl: string

  constructor(private http: HttpClient,private router: Router) {
    this.router.events
       .pipe(filter(e=>e instanceof NavigationEnd))
       .subscribe((e:NavigationEnd)=>this.lastUrl = e.url)
  }


  isLoggedIn(): boolean {
    return this.user !== undefined
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MET_API.url}/login`, {
      email: email,
      password: password,
    }).pipe(map(user => this.user = user));
  }

  handleLogin(path: string = this.lastUrl){
    this.router.navigate(['/login', btoa(path)])
  }
  logout(){
    this.user = undefined;
  }
}
