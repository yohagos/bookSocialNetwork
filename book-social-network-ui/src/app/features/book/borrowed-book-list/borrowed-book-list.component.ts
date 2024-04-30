import { Component, OnInit } from '@angular/core';
import { BookResponse, BorrowedBookResponse, PageResponseBorrowedBookResponse } from '../../../services/models';
import { BooksService } from '../../../services/services';

@Component({
  selector: 'app-borrowed-book-list',
  templateUrl: './borrowed-book-list.component.html',
  styleUrl: './borrowed-book-list.component.scss'
})
export class BorrowedBookListComponent implements OnInit {

  borrowedBooks: PageResponseBorrowedBookResponse = {}
  page = 0
  size = 10

  selectedBook: BorrowedBookResponse = {}

  constructor(
    private booksService: BooksService,
  ) {}

  ngOnInit() {
    this.findAllBorrowedBooks()
  }

  findAllBorrowedBooks() {
    this.booksService.findAllBorrowedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (response) => {
        console.log(response.content)
        this.borrowedBooks = response
      }
    })
  }

  returnBorrowedBook(book: BorrowedBookResponse) {
    this.selectedBook = book
    console.log(this.selectedBook)
  }


  // Navigation

  get isLastPage() {
    return this.page == this.borrowedBooks.totalPage as number - 1
  }

  goToFirstPage() {
    this.page = 0
    this.findAllBorrowedBooks()
  }
  goToPreviousPage() {
    this.page--
    this.findAllBorrowedBooks()
  }
  goToPage(pageIndex: number) {
    this.page = pageIndex
    this.findAllBorrowedBooks()
  }
  goToNextPage() {
    this.page++
    this.findAllBorrowedBooks()
  }
  goToLastPage() {
    this.page = this.borrowedBooks.totalPage as number -1
    this.findAllBorrowedBooks()
  }

}
