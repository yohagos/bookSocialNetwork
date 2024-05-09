package com.book.socialnetwork;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableAsync
@RequiredArgsConstructor
public class SocialNetworkApiApplication {

	// private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(SocialNetworkApiApplication.class, args);
	}

	/*@Bean
	public CommandLineRunner commandLineRunner(
			RoleRepository roleRepository
	) {
		return args -> {
			if (roleRepository.findAll().isEmpty()) {
				roleRepository.save(
						Role.builder().name("USER").build()
				);
			}
		};
	}*/
}
