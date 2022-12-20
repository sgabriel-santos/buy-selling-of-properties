import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  getUserDetails() {
    let details: any;
    if (localStorage.getItem('userInfo')) {
      details = localStorage.getItem('userInfo');
      details = JSON.parse(details);
    } else {
      details = null;
    }
    return details;
  }

  //Set any variable token in Local Storage
  setDataInLocalStorage(variableName: any, data: any) {
    localStorage.setItem(variableName, data);
  }

  //JWT token
  getToken(){
    return localStorage.getItem('token');
  }

  removeToken(){
    return localStorage.removeItem('token');
  }

  clearStorage() {
    localStorage.clear();
  }
}
