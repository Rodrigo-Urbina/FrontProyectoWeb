import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface detailCounseling {
  profesorName: string;
  position: number;
  subject: string;
  pendent: string; 
}

export interface detailCounseling {
  profesorName: string;
  position: number;
  subject: string;
  pendent: string; 
}

const ELEMENT_DATA: detailCounseling[] = [
  {position: 1, profesorName: 'Luis Uresti', subject: 'Calculo integral', pendent: 'Aceptado Rechazar'},
  {position: 2, profesorName: 'Marco Antonio', subject: 'Calculo diferencial', pendent: 'Aceptado Rechazar'},
  {position: 3, profesorName: 'Carlos becerra', subject: 'Fisica', pendent: 'Aceptado Rechazar'},
  {position: 4, profesorName: 'Angel Garza', subject: 'Quimica', pendent: 'Aceptado Rechazar'},
  {position: 5, profesorName: 'Meep', subject: 'Calculo integral', pendent: 'Aceptado Rechazar'},
  {position: 6, profesorName: 'Diego Abundis', subject: 'Quimica', pendent: 'Aceptado Rechazar'},
  {position: 7, profesorName: 'Fernanda Galvan', subject: 'Finanzas', pendent: 'Aceptado Rechazar'},
  {position: 8, profesorName: 'Maria', subject: 'Fisica', pendent: 'Aceptado Rechazar'},
  {position: 9, profesorName: 'Hideki Ueda', subject: 'Calculo diferencial', pendent: 'Aceptado Rechazar'},
  {position: 10, profesorName: 'Alexa Palomino', subject: 'Fisica', pendent: 'Aceptado Rechazar'},
];
@Component({
  selector: 'app-detail-counseling',
  templateUrl: './detail-counseling.component.html',
  styleUrls: ['./detail-counseling.component.css']
})
export class TeacherDetailCounselingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['position', 'name', 'subject', 'pendent'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
