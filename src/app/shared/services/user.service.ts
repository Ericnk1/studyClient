import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_BASE_URL = 'user';

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.USER_BASE_URL);
  }
  public getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.USER_BASE_URL + '/' + id);
  }

  public restoreUser(id: number): Observable<User> {
    return this.httpClient.get<User>(this.USER_BASE_URL + '/restore' + '/' + id);
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.USER_BASE_URL, user);
  }

  public deleteUserById(id: number): Observable<any> {
    return this.httpClient.delete(this.USER_BASE_URL + '/' + id);
  }
  public fullyDeleteUserById(id: number): Observable<any> {
    return this.httpClient.delete(this.USER_BASE_URL + '/full-delete' + '/' + id);
  }

  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.USER_BASE_URL, user);
  }
}
