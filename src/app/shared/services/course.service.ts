import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private COURSE_BASE_URL = 'course';

  constructor(private httpClient: HttpClient) { }

  public getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.COURSE_BASE_URL);
  }

  public restoreCourse(): Observable<Course> {
    return this.httpClient.get<Course>(this.COURSE_BASE_URL.concat('/id'));
  }

  public addCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.COURSE_BASE_URL, course);
  }

  public deleteCourseById(id: number): Observable<any> {
    return this.httpClient.delete(this.COURSE_BASE_URL + id);
  }

  public updateCourse(course: Course): Observable<Course> {
    return this.httpClient.put<Course>(this.COURSE_BASE_URL, course);
  }
}
