package com.book.socialnetwork.feedback;

import com.book.socialnetwork.book.Book;
import com.book.socialnetwork.feedback.requests.FeedbackRequest;
import com.book.socialnetwork.feedback.responses.FeedbackResponse;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class FeedbackMapper {

    public Feedback toFeedback(FeedbackRequest request) {
        return Feedback.builder()
                .note(request.note())
                .comment(request.comment())
                .book(
                        Book.builder()
                                .id(request.bookId())
                                .archived(false)
                                .shareable(false)
                                .build()
                )
                .build();
    }

    public FeedbackResponse toFeedbackResponse(Feedback f, Long userId) {
        return FeedbackResponse.builder()
                .note(f.getNote())
                .comment(f.getComment())
                .ownFeedback(Objects.equals(f.getCreatedBy(), userId))
                .build();
    }
}
