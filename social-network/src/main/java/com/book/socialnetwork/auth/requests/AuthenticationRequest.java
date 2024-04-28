package com.book.socialnetwork.auth.requests;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@Builder
public class AuthenticationRequest {
    @Email(message = "Email is not well formatted")
    @NotEmpty(message = "Email is mandatory")
    @NotBlank(message = "Email without blanks")
    private String email;
    @NotEmpty(message = "Password is mandatory")
    @NotNull(message = "Password without blanks")
    @Size(min = 8, message = "Password should be at least 8 characters long minimum")
    private String password;
}
