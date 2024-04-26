import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../services/models';
import { AuthenticationService } from '../../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {
    email: '',
    password: ''
  }

  errorMsg: Array<string> = []


  constructor(
    private authService: AuthenticationService,
    private router: Router,

  ) {}

  register() {
    this.router.navigate(['register'])
  }

  login() {
    this.errorMsg = []
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        // todo - save token
        this.router.navigate(['books'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
