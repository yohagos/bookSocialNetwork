/* tslint:disable */
/* eslint-disable */
import { FeedbackResponse } from '../models/feedback-response';
export interface PageResponseFeedbackResponse {
  content?: Array<FeedbackResponse>;
  firstPage?: boolean;
  lastPage?: boolean;
  pageNumber?: number;
  sizeOfEachPage?: number;
  totalElement?: number;
  totalPage?: number;
}
