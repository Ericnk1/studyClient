import { Component, OnInit } from '@angular/core';
import {Signup} from '../shared/models/singup';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SignupService} from '../shared/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private formBuilder: FormBuilder, private signupService: SignupService) { }
  signupGroup: FormGroup;
  ngOnInit(): void {
    this.signupGroup = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  signup(): void{
    const signup = new Signup(this.signupGroup.get('username').value, this.signupGroup.get('password').value);
    this.signupService.validateSignup(signup).subscribe(
      value => window.location.assign("/home"),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );

  }

}
