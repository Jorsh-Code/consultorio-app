import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(public http : HttpClient) { }

  getAllPatients(page: number): Observable<Patient[]>{
    let url = 'https://api.solodata.es/pacientes?page=' + page;
    return this.http.get<Patient[]>(url);
  }
}
