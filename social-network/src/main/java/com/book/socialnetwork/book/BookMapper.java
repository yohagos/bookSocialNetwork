package com.book.socialnetwork.book;

import com.book.socialnetwork.book.request.BookRequest;
import com.book.socialnetwork.book.response.BookResponse;
import com.book.socialnetwork.book.response.BorrowedBookResponse;
import com.book.socialnetwork.file.FileUtils;
import com.book.socialnetwork.history.BookTransactionHistory;
import org.springframework.stereotype.Service;

@Service
public class BookMapper {

    public Book toBook(BookRequest request) {
        return Book.builder()
                .id(request.id())
                .title(request.title())
                .authorName(request.author())
                .isbn(request.isbn())
                .synopsis(request.synopsis())
                .shareable(request.shareable())
                .archived(false)
                .build();
    }

    public BookResponse toBookResponse(Book book) {
        return BookResponse.builder()
                .id(book.getId())
                .title(book.getTitle())
                .authorName(book.getAuthorName())
                .isbn(book.getIsbn())
                .synopsis(book.getSynopsis())
                .owner(book.getOwner().fullname())
                .rate(book.getRate())
                .archived(book.isArchived())
                .shareable(book.isShareable())
                .cover(FileUtils.readFileFromLocation(book.getBookCover()))
                .build();
    }

    public BorrowedBookResponse toBorrowedBookResponse(BookTransactionHistory history) {
        return BorrowedBookResponse.builder()
                .id(history.getBook().getId())
                .title(history.getBook().getTitle())
                .authorName(history.getBook().getAuthorName())
                .isbn(history.getBook().getIsbn())
                .rate(history.getBook().getRate())
                .archived(history.getBook().isArchived())
                .shareable(history.getBook().isShareable())
                .returnApproved(history.isReturnApproved())
                .build();
    }
}
