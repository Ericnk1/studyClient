import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;

  constructor() {
  }
  ngOnInit(): void {
    this.isLogged = false;
    if (localStorage.getItem('isLoginValid') === 'true') {
      this.isLogged = true;
    }
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }

}
