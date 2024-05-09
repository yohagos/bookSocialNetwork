package com.book.socialnetwork.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


public interface TokenRepository { //extends JpaRepository<Token, Long> {

    //Optional<Token> findByToken(String token);
}
