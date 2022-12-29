import { environment } from 'src/environments/environment';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from 'src/app/interfaces/image';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  private imageUrl = environment.SERVER_IP + "image";
  httpOptionsJson = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }
  };

  /** GET images from the server */
  getImagesByImmobileId(immobile_id: number): Observable<Image[]> {
    let url = `${this.imageUrl}/?immobile_id=${immobile_id}`
    return this.http.get<Image[]>(url, this.httpOptionsJson());
  }
}
