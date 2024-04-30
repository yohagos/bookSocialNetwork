import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/services';
import { Router } from '@angular/router';
import { BookResponse, PageResponseBookResponse } from '../../../services/models';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent implements OnInit{

  bookResponse: PageResponseBookResponse = {}
  size = 5
  page = 0

  constructor(
    private booksService: BooksService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.findAllBooksByOwner()
  }

  private findAllBooksByOwner() {
    this.booksService.findAllBooksByOwner({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books) => {
        this.bookResponse = books
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  archiveBook(book: BookResponse) {
    this.booksService.updateArchivedStatus({
      'bookId': book.id as number
    }).subscribe({
      next: () => {
        book.archived = !book.archived
      }
    })
  }

  shareBook(book: BookResponse) {
    this.booksService.updateShareableStatus({
      'bookId': book.id as number
    }).subscribe({
      next: () => {
        book.shareable = !book.shareable;
      }
    })
  }

  editBook(book: BookResponse) {
    this.router.navigate(['books', 'manage', book.id])
  }

  // Navigation
  get isLastPage() {
    return this.page == this.bookResponse.totalPage as number - 1
  }

  goToFirstPage() {
    this.page = 0
    this.findAllBooksByOwner()
  }
  goToPreviousPage() {
    this.page--
    this.findAllBooksByOwner()
  }
  goToPage(pageIndex: number) {
    this.page = pageIndex
    this.findAllBooksByOwner()
  }
  goToNextPage() {
    this.page++
    this.findAllBooksByOwner()
  }
  goToLastPage() {
    this.page = this.bookResponse.totalPage as number -1
    this.findAllBooksByOwner()
  }

}
