import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Authority} from '../models/authority';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  private AUTHORITY_BASE_URL = 'authority';

  constructor(private httpClient: HttpClient) { }

  public getAllAuthorities(): Observable<Authority[]> {
    return this.httpClient.get<Authority[]>(this.AUTHORITY_BASE_URL);
  }

  public addAuthority(authority: Authority): Observable<Authority> {
    return this.httpClient.post<Authority>(this.AUTHORITY_BASE_URL, authority);
  }
}
