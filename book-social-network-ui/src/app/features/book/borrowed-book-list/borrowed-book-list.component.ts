import { Component, OnInit } from '@angular/core';
import { BookResponse, BorrowedBookResponse, FeedbackRequest, PageResponseBorrowedBookResponse } from '../../../services/models';
import { BooksService, FeedbackService } from '../../../services/services';

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
  feedbackRequest: FeedbackRequest = {
    bookId: 0,
    comment: '',
    note: 0
  }

  constructor(
    private booksService: BooksService,
    private feedbackService: FeedbackService,
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
        this.borrowedBooks = response
      }
    })
  }

  returnBorrowedBook(book: BorrowedBookResponse) {
    this.selectedBook = {
      id: book.id,
      authorName: book.authorName,
      isbn: book.isbn,
      title: book.title,
      rate: book.rate
    }
  }

  returnBook(withFeedback: boolean) {
    console.log(this.selectedBook)
    this.booksService.returnBorrowedBook({
      'bookId': this.selectedBook?.id as number,
    }).subscribe({
      next: () => {
        if (withFeedback) {
          this.giveFeedback()
        }
        this.selectedBook = {}
        this.findAllBorrowedBooks()
      }
    })
  }

  giveFeedback() {
    this.feedbackService.saveFeedback({
      body: this.feedbackRequest
    }).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setSelectedBookToUndefined() {
    this.selectedBook = {}
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
