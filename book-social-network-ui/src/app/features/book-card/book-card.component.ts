import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookResponse } from '../../services/models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  private _book: BookResponse = {}
  private _bookCover: string | undefined
  private _manage = false

  constructor() {}

  get book() {
    return this._book
  }

  @Input()
  set book(book: BookResponse) {
    this._book = book
  }

  get bookCover() {
    if (this._book.cover) {
      return 'data:image/jpg;base64, ' + this._book.cover
    }
    return 'https://source.unsplash.com/user/c_v_r/1900x800'
  }

  @Output() private share: EventEmitter<BookResponse> = new EventEmitter
  @Output() private borrow: EventEmitter<BookResponse> = new EventEmitter
  @Output() private addToWaitingList: EventEmitter<BookResponse> = new EventEmitter
  @Output() private edit: EventEmitter<BookResponse> = new EventEmitter
  @Output() private details: EventEmitter<BookResponse> = new EventEmitter
  @Output() private archive: EventEmitter<BookResponse> = new EventEmitter

  get manage() {
    return this._manage
  }

  @Input()
  set manage(m: boolean) {
    this._manage = m
  }

  onShowDetails() {
    this.details.emit(this._book)
  }

  onBorrow() {
    this.borrow.emit(this._book)
  }

  onAddToWaitingList() {
    this.addToWaitingList.emit(this._book)
  }

  onEdit() {
    this.edit.emit(this._book)
  }

  onShare() {
    this.share.emit(this._book)
  }

  onArchive() {
    this.archive.emit(this._book)
  }

}
