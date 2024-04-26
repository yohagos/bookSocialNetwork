/* tslint:disable */
/* eslint-disable */
import { BookResponse } from '../models/book-response';
export interface PageResponseBookResponse {
  content?: Array<BookResponse>;
  firstPage?: boolean;
  lastPage?: boolean;
  pageNumber?: number;
  sizeOfEachPage?: number;
  totalElement?: number;
  totalPage?: number;
}
