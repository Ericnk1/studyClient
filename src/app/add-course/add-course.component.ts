import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../shared/services/school.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {School} from '../shared/models/school';
import {Course} from '../shared/models/course';
import {CourseService} from '../shared/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private courseService: CourseService, private location: Location,
              private formBuilder: FormBuilder) { }
  addCourseGroup: FormGroup;

  ngOnInit(): void {
    this.addCourseGroup = this.formBuilder.group({
      name: '',
      duration: ''
    });
  }
  addSchool(): void {
    const addCourse = new Course(null, this.addCourseGroup.get('name').value,
      this.addCourseGroup.get('duration').value, null);
    console.log(addCourse);
    this.courseService.addCourse(addCourse).subscribe(value => window.location.assign('/course'));
  }

  goBack(): void {
    this.location.back();
  }

}
