import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeader = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(credenciales): Observable<any> {
    let url = "http://localhost:3000/login";
    return this.http.post(url, credenciales, httpHeader);
  }

  register(userinfo): Observable<any> {
    let url = "http://localhost:3000/registro";
    return this.http.post(url, userinfo, httpHeader);
  }
}
