import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { apiUrl } from '../constants/urls';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Authorization": `Bearer ${JSON.parse(localStorage.currentUser).jwt}`
    })
  }

  getUsers() {
    return this.http.get<any>(`${apiUrl}/user`, this.httpOptions);
  }
  getStudents() {
    return this.http.get<any>(`${apiUrl}/user?role=3`, this.httpOptions);
  }
  getTeachers() {
    return this.http.get<any>(`${apiUrl}/user?role=2`, this.httpOptions);
  }
  getAdmins() {
    return this.http.get<any>(`${apiUrl}/user?role=1`, this.httpOptions);
  }
  updateUser(id: number, body: any) {
    return this.http.put<any>(`${apiUrl}/user/${id}`, body, this.httpOptions);
  }
  deleteUser(id: number) {
    return this.http.delete<any>(`${apiUrl}/user/${id}`, this.httpOptions);
  }
}
