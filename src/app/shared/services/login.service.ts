import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private LOGIN_BASE_URL = 'login';

  constructor(private httpClient: HttpClient) {
  }

  public validateLogin(login: Login): Observable<Login> {
    return this.httpClient.post<Login>(this.LOGIN_BASE_URL, login);
  }
}
