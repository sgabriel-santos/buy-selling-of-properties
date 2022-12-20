import { environment } from 'src/environments/environment';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  private usersUrl = environment.SERVER_IP + "user";
  httpOptionsJson = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }
  };

  httpOptionsUrlEncoded = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }
  };

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, this.httpOptionsUrlEncoded());
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url, { responseType: 'json' });
  }

  /** GET user by username. Will 404 if id not found */
  getUserByUsername(username: string): Observable<User> {
    const url = `${this.usersUrl}/username/${username}`;
    return this.http.get<User>(url, this.httpOptionsUrlEncoded());
  }

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, {
      global_id: user.global_id,
      name: user.name,
      username: user.username,
      email: user.email,
      department_name: user.department_name,
      department_id: user.department_id,
      role: user.role,
      is_active: user.is_active}, this.httpOptionsJson())
  }

  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put(url, {
      global_id: user.global_id,
      name: user.name,
      username: user.username,
      email: user.email,
      department_name: user.department_name,
      department_id: user.department_id,
      role: user.role,
      is_active: user.is_active,
      password: "123"}, this.httpOptionsJson());
  }
}
