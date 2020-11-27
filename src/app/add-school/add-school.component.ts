import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SchoolService} from '../shared/services/school.service';
import {School} from '../shared/models/school';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  constructor(private schoolService: SchoolService, private location: Location,
              private formBuilder: FormBuilder) { }
  addSchoolGroup: FormGroup;

  ngOnInit(): void {
    this.addSchoolGroup = this.formBuilder.group({
      name: '',
      city: '',
      phone: ''
    });
  }
  addSchool(): void {
    const addSchool = new School(null, this.addSchoolGroup.get('name').value,
      this.addSchoolGroup.get('city').value, this.addSchoolGroup.get('phone').value, null);
    // console.log(addSchool);
    this.schoolService.addSchool(addSchool).subscribe(value => window.location.assign('/school'));
  }

  goBack(): void {
    this.location.back();
  }

}
