import { Component, OnInit } from '@angular/core';
import { BookRequest, BookResponse } from '../../../services/models';
import { BooksService } from '../../../services/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrl: './manage-book.component.scss'
})
export class ManageBookComponent implements OnInit {

  bookRequest: BookRequest = {
    author: '',
    isbn: '',
    synopsis: '',
    title: ''
  }

  errorMsg: string = ''
  selectedPicture: string | undefined

  selectedBookCover: any

  constructor(
    private bookService: BooksService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const bookId = this.activatedRoute.snapshot.params['bookId']
    if (bookId) {
      this.bookService.findBookById({
        'bookId': bookId
      }).subscribe({
        next: (book: BookResponse) => {
          this.bookRequest = {
            author: book.authorName as string,
            isbn: book.isbn as string,
            synopsis: book.synopsis as string,
            title: book.title as string,
            id: book.id as number,
            shareable: book.shareable as boolean
          }
          if (book.cover) {
            this.selectedPicture =  `data:image/png;base64,${book.cover}`
          }
        }
      })
    }
  }

  onFileSelected(event: any) {
    this.selectedBookCover = event.target.files[0]
    if (this.selectedBookCover) {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        this.selectedPicture = fileReader.result as string;
      }
      fileReader.readAsDataURL(this.selectedBookCover)
    }
  }

  createNewBook() {
    this.bookService.saveBook({
      body: this.bookRequest
    }).subscribe({
      next: (bookId: number) => {
        this.bookService.uploadBookCoverPicture({
          'bookId': bookId,
          body: {
            file: this.selectedBookCover
          }
        }).subscribe({
          next: () => {
            this.router.navigate(['/books/my-books'])
          }
        })
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors
      }
    })
  }

}
