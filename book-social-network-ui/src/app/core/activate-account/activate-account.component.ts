import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {

  message = ''
  isOkay = true
  submitted = false

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  onCodeCompleted(token: string) {
    this.confirmAccount(token)
  }

  confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next: () => {
        this.message = "Your account has been confirmed!\nNow you can proceed to login."
        this.submitted = true
        this.isOkay = true
      },
      error: () => {
        this.message = "Token is expired or invalid"
        this.submitted = true
        this.isOkay = false
      }
    })
  }

  redirectToLogin() {
    this.router.navigate(['login'])
  }
}
