import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from './models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private LOGIN_BASE_URL = 'login';

  constructor(private httpClient: HttpClient) {
  }

  public validateLogin(login: Login) {
    return this.httpClient.post<Login>(this.LOGIN_BASE_URL, login);
  }
}
