import { Injectable } from '@angular/core';
import {School} from '../models/school';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private SCHOOL_BASE_URL = 'school';

  constructor(private httpClient: HttpClient) { }

  public getAllSchools(): Observable<School[]> {
    return this.httpClient.get<School[]>(this.SCHOOL_BASE_URL);
  }

  public getAllActiveSchools(): Observable<School[]> {
    return this.httpClient.get<School[]>(this.SCHOOL_BASE_URL + '/active');
  }

  public restoreSchool(id: number): Observable<School> {
    return this.httpClient.get<School>(this.SCHOOL_BASE_URL + '/restore' + '/' + id);
  }

  public addSchool(school: School): Observable<School> {
    return this.httpClient.post<School>(this.SCHOOL_BASE_URL, school);
  }

  public deleteSchoolById(id: number): Observable<any> {
    return this.httpClient.delete(this.SCHOOL_BASE_URL + '/' + id);
  }

  public updateSchool(school: School): Observable<School> {
    return this.httpClient.put<School>(this.SCHOOL_BASE_URL, school);
  }
}
