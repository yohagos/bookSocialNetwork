package com.book.socialnetwork;

import com.book.socialnetwork.role.Role;
import com.book.socialnetwork.role.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootApplication
@EnableJpaAuditing
@EnableAsync
public class SocialNetworkApiApplication {

	private static final Logger log = LoggerFactory.getLogger(SocialNetworkApiApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SocialNetworkApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			RoleRepository roleRepository
	) {
		return args -> {
			if (roleRepository.findByName("USER").isEmpty()) {
				roleRepository.save(
						new Role(
								1L,
								"USER",
								List.of(),
								LocalDateTime.now(),
								LocalDateTime.now()
						)
				);
			}
			log.warn(roleRepository.findAll().toString());
		};
	}
}
