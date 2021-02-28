import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../shared/services/school.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {School} from '../../shared/models/school';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {

  school: School;

  constructor(private schoolService: SchoolService, private location: Location,
              private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.school = {} as School;
  }
  updateSchoolGroup: FormGroup;

  ngOnInit(): void {
    this.school.id = this.route.snapshot.params.id;
    console.log(this.school.id);
    this.schoolService.getSchoolById(this.school.id).subscribe(value => {
      this.school = value;
      console.log(this.school);
    });
    this.updateSchoolGroup = this.formBuilder.group({
      id: this.school.id,
      name: this.school.name,
      city: this.school.city,
      phone: this.school.phone
    });
  }
  updateSchool(school: School): void {
    this.school = this.updateSchoolGroup.value;
    /*const updateSchool = new School(null, this.updateSchoolGroup.get('name').value,
      this.updateSchoolGroup.get('city').value, this.updateSchoolGroup.get('phone').value, true);*/
    console.log(school);
    this.schoolService.updateSchool(school).subscribe(value => window.location.assign('/school'));
  }

  goBack(): void {
    this.location.back();
  }

}
