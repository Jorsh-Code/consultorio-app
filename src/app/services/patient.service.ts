import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
import { ResponseLogin } from '../models/response-login.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(public http : HttpClient) { }

  getAllPatients(page: number): Observable<Patient[]>{
    let url = 'https://api.solodata.es/pacientes?page=' + page;
    return this.http.get<Patient[]>(url);
  }

  createPatient(form: any): Observable<ResponseLogin>{
    const URL = 'https://api.solodata.es/pacientes';
    return this.http.post<ResponseLogin>(URL,form);
  }
}
