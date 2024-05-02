import { Component } from '@angular/core';
import { RegisterRequest } from '../../services/models';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  }

  errorMsg: Array<string> = []

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  register() {
    this.errorMsg = []
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account'])
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors
      }
    })
  }

  login() {
    this.router.navigate(['login'])
  }
}
