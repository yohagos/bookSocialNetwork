import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../../services/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {



  constructor(
    private router: Router,
  ) {}

  logout() {
    
  }

}
