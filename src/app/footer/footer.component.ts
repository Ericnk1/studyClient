import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLogged: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isLogged = false;
    if (localStorage.getItem('isLoginValid') === 'true') {
      this.isLogged = true;
    }
  }

}
