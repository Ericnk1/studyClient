import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Signup} from '../models/singup';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private SIGNUP_BASE_URL = 'user';

  constructor(private httpClient: HttpClient) {
  }

  public validateSignup(user: User): Observable<User> {
    return this.httpClient.post<User>(this.SIGNUP_BASE_URL, user);
  }
}
