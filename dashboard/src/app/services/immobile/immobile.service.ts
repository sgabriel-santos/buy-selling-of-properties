import { environment } from 'src/environments/environment';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Immobile } from 'src/app/interfaces/immobile';

@Injectable({
  providedIn: 'root'
})
export class ImmobileService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  private immobileUrl = environment.SERVER_IP + "immobile";
  httpOptionsJson = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }
  };

  get_immobiles(): Observable<Immobile[]> {
    return this.http.get<Immobile[]>(this.immobileUrl, this.httpOptionsJson());
  }
}
