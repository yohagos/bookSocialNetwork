import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/services';
import { BorrowedBookResponse, PageResponseBorrowedBookResponse } from '../../../services/models';

@Component({
  selector: 'app-returned-book-list',
  templateUrl: './returned-book-list.component.html',
  styleUrl: './returned-book-list.component.scss'
})
export class ReturnedBookListComponent implements OnInit {

  returnedBooks: PageResponseBorrowedBookResponse = {}
  page = 0
  size = 5

  message = ''
  level = 'success'

  constructor(
    private booksService: BooksService,
  ) {}

  ngOnInit() {
    this.findAllReturnedBooks()
  }

  findAllReturnedBooks() {
    this.booksService.findAllReturnedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books) => {
        this.returnedBooks = books
      },
    })
  }

  approveBookReturned(book: BorrowedBookResponse) {
    if (!book.returned) {
      this.level = 'error'
      this.message = `Book ${book.title} was not returned. Approving cannot be done right now`
      return;
    }

    this.booksService.approvedReturnBorrowedBook({
      'bookId': book.id as number
    }).subscribe({
      next: () => {
        this.level = 'success'
        this.message = `Book ${book.title} return approved`
        this.findAllReturnedBooks()
      }
    })
  }


  // Navigations

  get isLastPage() {
    return this.page == this.returnedBooks.totalPage as number - 1
  }

  goToFirstPage() {
    this.page = 0
    this.findAllReturnedBooks()
  }
  goToPreviousPage() {
    this.page--
    this.findAllReturnedBooks()
  }
  goToPage(pageIndex: number) {
    this.page = pageIndex
    this.findAllReturnedBooks()
  }
  goToNextPage() {
    this.page++
    this.findAllReturnedBooks()
  }
  goToLastPage() {
    this.page = this.returnedBooks.totalPage as number -1
    this.findAllReturnedBooks()
  }
}
