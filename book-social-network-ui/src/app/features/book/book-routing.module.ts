import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { BookListComponent } from './book-list/book-list.component';
import { authGuard } from '../../core/auth.guard';
import { MyBooksComponent } from './my-books/my-books.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { BorrowedBookListComponent } from './borrowed-book-list/borrowed-book-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: BookListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'my-books',
        component: MyBooksComponent,
        canActivate: [authGuard],
      },
      {
        path: 'manage',
        component: ManageBookComponent,
        canActivate: [authGuard],
      },
      {
        path: 'manage/:bookId',
        component: ManageBookComponent,
        canActivate: [authGuard],
      },
      {
        path: 'my-borrowed-books',
        component: BorrowedBookListComponent,
        canActivate: [authGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
