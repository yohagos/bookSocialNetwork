package com.book.socialnetwork.auth.response;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
public class AuthenticationResponse {

    private String token;
}
