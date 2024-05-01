import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// Modules
import { BookRoutingModule } from './book-routing.module';

// Components
import { MainComponent } from '../main/main.component';
import { MenuComponent } from '../menu/menu.component';
import { BookCardComponent } from "../book-card/book-card.component";
import { BookRatingComponent } from '../book-rating/book-rating.component';
import { BookListComponent } from './book-list/book-list.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { BorrowedBookListComponent } from './borrowed-book-list/borrowed-book-list.component';
import { ReturnedBookListComponent } from './returned-book-list/returned-book-list.component';



@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    BookCardComponent,
    BookRatingComponent,
    BookListComponent,
    MyBooksComponent,
    ManageBookComponent,
    BorrowedBookListComponent,
    ReturnedBookListComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
  ]
})
export class BookModule { }
