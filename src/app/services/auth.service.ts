import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/response-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token : string = '';
  constructor(public http : HttpClient) { }

  login(form: Login): Observable<ResponseLogin>{
    const URL = 'https://api.solodata.es/auth';
    return this.http.post<ResponseLogin>(URL,form);
  }

  logout(): void{
    sessionStorage.removeItem('token');
  }

  getStatus(): boolean{
    return (sessionStorage.getItem('token') !== '' && sessionStorage.getItem('token') !== null);
  }

}
