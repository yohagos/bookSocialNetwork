import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// Modules
import { BookRoutingModule } from './book-routing.module';

// Components
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
  ]
})
export class BookModule { }
