import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { apiUrl } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Authorization": `Bearer ${JSON.parse(localStorage.currentUser).jwt}`
    })
  };

  getUsers() {
    return this.http.get<any>(`${apiUrl}/user`, this.httpOptions);
  }
  getStudents() {
    return this.http.get<any>(`${apiUrl}/user?role=0`, this.httpOptions);
  }
  getAdmins() {
    return this.http.get<any>(`${apiUrl}/user?role=1`, this.httpOptions);
  }
  deleteUser(id: number) {
    return this.http.delete<any>(`${apiUrl}/user/${id}`, this.httpOptions);
  }
}
