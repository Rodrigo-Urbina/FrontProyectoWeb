import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface detailCounseling {
  profesorName: string;
  position: number;
  subject: string;
  status: string; 
  extra: string;
}

const ELEMENT_DATA: detailCounseling[] = [
  {position: 1, profesorName: 'Luis Uresti', subject: 'Calculo integral', status: 'Aceptado', extra: 'ver detalles'},
  {position: 2, profesorName: 'Marco Antonio', subject: 'Calculo diferencial', status: 'Aceptado', extra: 'ver detalles'},
  {position: 3, profesorName: 'Carlos becerra', subject: 'Fisica', status: 'Aceptado', extra: 'ver detalles'},
  {position: 4, profesorName: 'Angel Garza', subject: 'Quimica', status: 'Rechazado', extra: 'ver detalles'},
  {position: 5, profesorName: 'Meep', subject: 'Calculo integral', status: 'Rechazado', extra: 'ver detalles'},
  {position: 6, profesorName: 'Diego Abundis', subject: 'Quimica', status: 'Rechazado', extra: 'ver detalles'},
  {position: 7, profesorName: 'Fernanda Galvan', subject: 'Finanzas', status: 'Rechazado', extra: 'ver detalles'},
  {position: 8, profesorName: 'Maria', subject: 'Fisica', status: 'Rechazado', extra: 'ver detalles'},
  {position: 9, profesorName: 'Hideki Ueda', subject: 'Calculo diferencial', status: 'Rechazado', extra: 'ver detalles'},
  {position: 10, profesorName: 'Alexa Palomino', subject: 'Fisica', status: 'Aceptado', extra: 'ver detalles'},
];
@Component({
  selector: 'app-detail-counseling',
  templateUrl: './detail-counseling.component.html',
  styleUrls: ['./detail-counseling.component.css']
})
export class DetailCounselingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'subject', 'status', 'extra'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
