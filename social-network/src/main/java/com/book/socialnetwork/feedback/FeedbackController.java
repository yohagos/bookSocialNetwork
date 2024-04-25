package com.book.socialnetwork.feedback;

import com.book.socialnetwork.common.PageResponse;
import com.book.socialnetwork.feedback.requests.FeedbackRequest;
import com.book.socialnetwork.feedback.responses.FeedbackResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/feedbacks")
@RequiredArgsConstructor
@Tag(name = "Feedback")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<Long> saveFeedback(
            @Valid @RequestBody FeedbackRequest request,
            Authentication connectedUser
    ) {
        return ResponseEntity.ok(feedbackService.saveFeedback(request, connectedUser));
    }

    @GetMapping("/book/{bookId}")
    public ResponseEntity<PageResponse<FeedbackResponse>> findAllFeedbacksByBook(
            @PathVariable("bookId") Long bookId,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "0", required = false) int size,
            Authentication connectedUser
    ) {
        return ResponseEntity.ok(feedbackService.findAllFeedbacksByBook(bookId, page, size, connectedUser));
    }
}
