import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../services/models';
import { AuthenticationService } from '../../services/services';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

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
    private tokenService: TokenService,
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
        this.tokenService.token = res.token as string
        this.router.navigate(['books'])
      },
      error: (err) => {
        console.log(err)
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        } else {
          this.errorMsg.push(err.error.errorMsg)
        }
      }
    })
  }

}
