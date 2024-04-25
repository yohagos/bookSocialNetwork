package com.book.socialnetwork.feedback.responses;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackResponse {

    private double note;
    private String comment;
    private boolean ownFeedback;

}
