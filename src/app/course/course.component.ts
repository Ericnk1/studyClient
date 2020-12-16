import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {Course} from '../shared/models/course';
import {CourseService} from '../shared/services/course.service';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) { }

  displayedColumns: string[] = ['id', 'name', 'durationHours', 'button'];

  courses: Course[] = [];
  dataSource = null;
  course: Course;
  isActive: boolean;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.courseService.getAllActiveCourses().subscribe(value => {
      this.courses = (value);
      // console.log(value);
      this.dataSource = new MatTableDataSource(this.courses);
      this.dataSource.sort = this.sort; });

  }
  deleteCourse(id: number): void {
    this.courseService.deleteCourseById(id).subscribe(value => window.location.assign('/course'));
  }
  restoreCourse(id: number): void {
    this.courseService.restoreCourse(id).subscribe(value => window.location.assign('/course'));
  }
  /*update(): void {
    this.router.navigate(['/update-course', this.course]);
  }*/

}
