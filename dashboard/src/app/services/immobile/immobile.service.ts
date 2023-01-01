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

  get_immobile_by_id(immobile_id): Observable<Immobile>{
    let url = `${this.immobileUrl}/${immobile_id}`
    return this.http.get<Immobile>(url, this.httpOptionsJson());
  }

  get_immobile_with_image(): Observable<any[]>{
    let url = `${this.immobileUrl}/with_image/base64`
    return this.http.get<any[]>(url, this.httpOptionsJson())
  }

  /** POST: add a new Immobile to the server */
  addImmobile(immobile: Immobile, images: any[]): Observable<Immobile> {
    let obj = {"immobile": immobile, "images": images}
    return this.http.post<Immobile>(this.immobileUrl, obj, this.httpOptionsJson())
  }
}
