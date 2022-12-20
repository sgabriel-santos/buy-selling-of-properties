import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.SERVER_IP
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    ) { }

  login(username: any, password: any): Observable<any>{
    const my_headers = new Headers();
    my_headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let grant_type = 'password';
    let body = `grant_type=${grant_type}&username=${username}&password=${password}`;

      return this.http.post<Token>(`${this.url}login`, body, this.httpOptions).pipe(map(res => {
        return res;
      }));
  }

  /** GET menu from the server */
  getMenu(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.auth.getToken()}`
      })
  };
    return this.http.get<any>(`${this.url}user/menu/`, httpOptions)
  }

}
