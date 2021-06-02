import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Authorization": `Bearer ${JSON.parse(localStorage.currentUser).jwt}`
    })
  }

  updateTeacher(id: number, body: any) {
    return this.http.put<any>(`${apiUrl}/user/${id}`, body, this.httpOptions)
  }

  getPastTutoring() {
    return this.http.get<any>(`${apiUrl}/tutoring/myPast`, this.httpOptions)
  }

  getFutureTutoring() {
    return this.http.get<any>(`${apiUrl}/tutoring/myUpcoming`, this.httpOptions)
  }

  editTutoring(id: number, body: any) {
    return this.http.put<any>(`${apiUrl}/tutoring/${id}`, body, this.httpOptions)
  }

}
