import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/services';
import { Router } from '@angular/router';
import { PageResponseBookResponse } from '../../../services/models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {}

  size = 5
  page = 0


  constructor(
    private booksService: BooksService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.findAllBooks()
  }

  private findAllBooks() {
    this.booksService.findAllBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books) => {
        console.log(books)
        this.bookResponse = books
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
