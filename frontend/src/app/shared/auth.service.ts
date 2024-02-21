import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'https://portfolio-matfen-8ebe46099e64.herokuapp.com'; //Url Heroku

  sendMessage(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/contact`, data)
  }
}
