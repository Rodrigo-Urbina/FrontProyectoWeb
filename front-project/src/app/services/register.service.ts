import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { apiUrl } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    })
  };

  register(body: any) {
    return this.http.post<any>(`${apiUrl}/auth/signup`, body);
  }
}
