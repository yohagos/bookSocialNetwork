package com.book.socialnetwork.feedback;

import com.book.socialnetwork.book.Book;
import com.book.socialnetwork.book.BookRepository;
import com.book.socialnetwork.common.PageResponse;
import com.book.socialnetwork.exceptions.OperationNotPermittedException;
import com.book.socialnetwork.feedback.requests.FeedbackRequest;
import com.book.socialnetwork.feedback.responses.FeedbackResponse;
import com.book.socialnetwork.user.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final FeedbackMapper feedbackMapper;
    private final BookRepository bookRepository;

    public Long saveFeedback(FeedbackRequest request, Authentication connectedUser) {
        Book book = bookRepository
                .findById(request.bookId())
                .orElseThrow(() -> new EntityNotFoundException("Cannot find book with ID: "));

        if (book.isArchived() || !book.isShareable())
            throw new OperationNotPermittedException("Feedback to archived or not shareable book is not permitted");

        //User user = (User) connectedUser.getPrincipal();
        if (Objects.equals(book.getCreatedBy(), connectedUser.getName()))
            throw new OperationNotPermittedException("Owner cannot write a feedback to the book");

        var feedback = feedbackMapper.toFeedback(request);
        return feedbackRepository.save(feedback).getId();
    }

    public PageResponse<FeedbackResponse> findAllFeedbacksByBook(Long bookId, int page, int size, Authentication connectedUser) {
        Pageable pageable = PageRequest.of(page, size);
        //User user = (User) connectedUser.getPrincipal();

        Page<Feedback> feedbacks = feedbackRepository.findAllByBookId(bookId, pageable);
        List<FeedbackResponse> feedbackResponses = feedbacks.stream()
                .map(f -> feedbackMapper.toFeedbackResponse(f, connectedUser.getName()))
                .toList();
        return new PageResponse<>(
                feedbackResponses,
                feedbacks.getNumber(),
                feedbacks.getSize(),
                feedbacks.getTotalElements(),
                feedbacks.getTotalPages(),
                feedbacks.isFirst(),
                feedbacks.isLast()
        );
    }
}
