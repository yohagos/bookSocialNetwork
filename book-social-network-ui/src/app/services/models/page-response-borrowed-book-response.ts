/* tslint:disable */
/* eslint-disable */
import { BorrowedBookResponse } from '../models/borrowed-book-response';
export interface PageResponseBorrowedBookResponse {
  content?: Array<BorrowedBookResponse>;
  firstPage?: boolean;
  lastPage?: boolean;
  pageNumber?: number;
  sizeOfEachPage?: number;
  totalElement?: number;
  totalPage?: number;
}
