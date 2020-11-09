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

  displayedColumns: string[] = ['id', 'name', 'durationHours', 'isActive'];

  courses: Course[] = [];
  dataSource = null;

  @ViewChild(MatSort) sort: MatSort;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(value => {
      this.courses = (value);
      console.log(value);
      this.dataSource = new MatTableDataSource(this.courses);
      this.dataSource.sort = this.sort; });

  }

}
