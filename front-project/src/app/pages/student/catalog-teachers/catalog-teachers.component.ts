import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface CatalogTeacher {
  profesorName: string;
  position: number;
  subject: string;
  grade: number; 
}

const ELEMENT_DATA: CatalogTeacher[] = [
  {position: 1, profesorName: 'Luis Uresti', subject: 'Calculo integral', grade: 4},
  {position: 2, profesorName: 'Marco Antonio', subject: 'Calculo diferencial', grade: 9},
  {position: 3, profesorName: 'Carlos becerra', subject: 'Fisica', grade: 1},
  {position: 4, profesorName: 'Angel Garza', subject: 'Quimica', grade: 6},
  {position: 5, profesorName: 'Meep', subject: 'Calculo integral', grade: 10},
  {position: 6, profesorName: 'Diego Abundis', subject: 'Quimica', grade: 8},
  {position: 7, profesorName: 'Fernanda Galvan', subject: 'Finanzas', grade: 4},
  {position: 8, profesorName: 'Maria', subject: 'Fisica', grade: 10},
  {position: 9, profesorName: 'Hideki Ueda', subject: 'Calculo diferencial', grade: 0},
  {position: 10, profesorName: 'Alexa Palomino', subject: 'Fisica', grade: 9},
];

@Component({
  selector: 'app-catalog-teachers',
  templateUrl: './catalog-teachers.component.html',
  styleUrls: ['./catalog-teachers.component.css']
})
export class CatalogTeachersComponent implements OnInit {

  constructor() { 
    
  }
  displayedColumns: string[] = ['position', 'name', 'subject', 'grade'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
