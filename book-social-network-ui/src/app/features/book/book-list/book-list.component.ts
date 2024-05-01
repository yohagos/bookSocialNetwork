import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/services';
import { Router } from '@angular/router';
import { BookResponse, PageResponseBookResponse } from '../../../services/models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {}
  message = ''
  level: string = 'success'
  size = 10
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
        this.bookResponse = books
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  borrowBook(book: BookResponse){
    this.message = ''
    this.booksService.borrowBook({
      'bookId': book.id as number
    }).subscribe({
      next: () => {
        this.level = 'success'
        this.message = `Book ${book.title} has been requested`
      },
      error: (err) => {
        this.level = 'error'
        this.message = err.error.error
      }
    })
  }

  // Navigation
  get isLastPage() {
    return this.page == this.bookResponse.totalPage as number - 1
  }

  goToFirstPage() {
    this.page = 0
    this.findAllBooks()
  }
  goToPreviousPage() {
    this.page--
    this.findAllBooks()
  }
  goToPage(pageIndex: number) {
    this.page = pageIndex
    this.findAllBooks()
  }
  goToNextPage() {
    this.page++
    this.findAllBooks()
  }
  goToLastPage() {
    this.page = this.bookResponse.totalPage as number -1
    this.findAllBooks()
  }

}
