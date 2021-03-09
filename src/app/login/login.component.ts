import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {Login} from '../shared/models/login';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar: MatSnackBar,
              private location: Location,
              private formBuilder: FormBuilder,
              private loginService: LoginService) { }
  loginGroup: FormGroup;
  ngOnInit(): void {
    localStorage.removeItem('isLoginValid');
    this.loginGroup = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  login(): void{
    const login = new Login(this.loginGroup.get('username').value, this.loginGroup.get('password').value);
    this.loginService.validateLogin(login).subscribe(
      value => {
        localStorage.setItem('isLoginValid', 'true');
        window.location.assign('/home');
        },
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );

  }
  goBack(): void {
    this.location.back();
  }

}
