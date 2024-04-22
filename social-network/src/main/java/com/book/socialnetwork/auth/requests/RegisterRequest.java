package com.book.socialnetwork.auth.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@Builder
public class RegisterRequest {

    @NotEmpty(message = "Firstname is mandatory")
    @NotBlank(message = "Firstname without blanks")
    private String firstname;
    @NotEmpty(message = "Lastname is mandatory")
    @NotBlank(message = "Lastname without blanks")
    private String lastname;
    @Email(message = "Email is not formatted")
    @NotEmpty(message = "Email is mandatory")
    @NotBlank(message = "Email without blanks")
    private String email;
    @NotEmpty(message = "Password is mandatory")
    @NotBlank(message = "Password without blanks")
    @Size(min = 8, message = "Password should be at least 8 characters long minimum")
    private String password;
}
