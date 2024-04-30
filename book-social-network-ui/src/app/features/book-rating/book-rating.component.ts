import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrl: './book-rating.component.scss'
})
export class BookRatingComponent {

  @Input() rating = 0
  maxRating = 5

  get fullStars() {
    return Math.floor(this.rating)
  }

  get hasHalfStar() {
    return this.rating % 1 !== 0
  }

  get emptyStars() {
    return this.maxRating - Math.ceil(this.rating)
  }

}
