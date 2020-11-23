import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {Course} from '../shared/models/course';
import {CourseService} from '../shared/services/course.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(private courseService: CourseService) { }

  displayedColumns: string[] = ['id', 'name', 'durationHours', 'isActive', 'button'];

  courses: Course[] = [];
  dataSource = null;
  course: Course;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(value => {
      this.courses = (value);
      console.log(value);
      this.dataSource = new MatTableDataSource(this.courses);
      this.dataSource.sort = this.sort; });

  }
  deleteCourse(id: number): void {
    this.courseService.deleteCourseById(id).subscribe(value => window.location.assign('/courses'));
  }

}
