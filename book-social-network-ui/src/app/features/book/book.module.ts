import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BookRoutingModule } from './book-routing.module';

// Components
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MainComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
