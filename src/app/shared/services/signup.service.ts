import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Signup} from '../models/singup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private LOGIN_BASE_URL = 'signup';

  constructor(private httpClient: HttpClient) {
  }

  public validateSignup(signup: Signup) {
    return this.httpClient.post<Signup>(this.LOGIN_BASE_URL, signup);
  }
}
