import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from '../../services/models';
import { AuthenticationService } from '../../services/services';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { KeycloakService } from '../keycloak.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  /* authRequest: AuthenticationRequest = {
    email: '',
    password: ''
  }

  errorMsg: Array<string> = [] */

  constructor(
    private keycloakService: KeycloakService,
  ) {}

  async ngOnInit() {
    await this.keycloakService.init()
    await this.keycloakService.login()
  }

  /* async register() {

  }

  login() {
    /* this.errorMsg = []
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string
        this.router.navigate(['books'])
      },
      error: (err) => {
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        } else {
          this.errorMsg.push(err.error.errorMsg)
        }
      }
    }) 
  } */

}
