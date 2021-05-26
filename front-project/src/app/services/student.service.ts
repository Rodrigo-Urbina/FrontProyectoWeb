import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Authorization": `Bearer ${JSON.parse(localStorage.currentUser).jwt}`
    })
  }

  getTeachers() {
    return this.http.get<any>(`${apiUrl}/teacher`, this.httpOptions);
  }

  getTeacher(id: number){
    return this.http.get<any>(`${apiUrl}/teacher/${id}`, this.httpOptions);
  }

  getAppointments(id: number) {
    return this.http.get<any>(`${apiUrl}/tutoring/teacher/${id}`)
  }

  getPastCounselings() {
    return this.http.get<any>(`${apiUrl}/tutoring/myPast`, this.httpOptions)
  }
}
