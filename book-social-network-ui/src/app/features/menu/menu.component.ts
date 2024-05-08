import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/services';
import { KeycloakService } from '../../core/keycloak.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  constructor(
    private router: Router,
    private keycloakService: KeycloakService,
  ) {}

  ngOnInit() {
    const linkColor = document.querySelectorAll('.nav-link')
    linkColor.forEach((elem) => {
      if(window.location.href.endsWith(elem.getAttribute('href') || '')) {
        elem.classList.add('active')
      }
      elem.addEventListener('click', () => {
        linkColor.forEach(l => l.classList.remove('active'))
        elem.classList.add('active')
      })
    })
  }

  async logout() {
    this.keycloakService.logout()
  }
}
