package com.book.socialnetwork;

import com.book.socialnetwork.book.Book;
import com.book.socialnetwork.book.BookRepository;
import com.book.socialnetwork.role.RoleRepository;
import com.book.socialnetwork.user.User;
import com.book.socialnetwork.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableAsync
@RequiredArgsConstructor
public class SocialNetworkApiApplication {

	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(SocialNetworkApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			RoleRepository roleRepository,
			UserRepository userRepository,
			BookRepository bookRepository
	) {
		return args -> {
			/*roleRepository.save(
					Role.builder().name("USER").build()
			);*/

			Thread.sleep(900);

			var userRole = roleRepository.findByName("USER").orElseThrow();
			if (userRepository.findAll().isEmpty()) {
				userRepository.saveAll(
						List.of(
								new User(
										100L,
										"Peter",
										"Peter",
										LocalDate.now(),
										"peter@peter.de",
										passwordEncoder.encode("peterpeter"),
										false,
										true,
										LocalDateTime.now(),
										LocalDateTime.now(),
										List.of(userRole),
										null,
										null
								),
								new User(
										101L,
										"Michael",
										"Michael",
										LocalDate.now(),
										"michael@michael.de",
										passwordEncoder.encode("michaelmichael"),
										false,
										true,
										LocalDateTime.now(),
										LocalDateTime.now(),
										List.of(userRole),
										null,
										null
								),
								new User(
										102L,
										"James",
										"James",
										LocalDate.now(),
										"james@james.de",
										passwordEncoder.encode("jamesjames"),
										false,
										true,
										LocalDateTime.now(),
										LocalDateTime.now(),
										List.of(userRole),
										null,
										null
								),
								new User(
										103L,
										"Carlos",
										"Carlos",
										LocalDate.now(),
										"carlos@carlos.de",
										passwordEncoder.encode("carloscarlos"),
										false,
										true,
										LocalDateTime.now(),
										LocalDateTime.now(),
										List.of(userRole),
										null,
										null
								)
						)
				);
			}

			Thread.sleep(900);

			if (bookRepository.findAll().isEmpty()) {
				var user1 = userRepository.findById(1L).orElseThrow();
				var user2 = userRepository.findById(2L).orElseThrow();

				var books = List.of(
						Book.builder()
								.id(11L)
								.title("Clean Code")
								.authorName("Uncle Bob")
								.shareable(true)
								.lastModifiedDate(LocalDateTime.now())
								.isbn("de15265353")
								.archived(false)
								.owner(user1)
								.createdBy(user1.getId())
								.lastModifiedBy(user1.getId())
								.synopsis("How to write and build code, which will be maintainable ...")
								.build(),
						Book.builder()
								.id(12L)
								.title("Clean Architecture")
								.authorName("Uncle Bob")
								.shareable(true)
								.lastModifiedDate(LocalDateTime.now())
								.isbn("sp15265353")
								.owner(user1)
								.createdBy(user1.getId())
								.lastModifiedBy(user1.getId())
								.archived(false)
								.synopsis("How to write and build code, which will be maintainable ...")
								.build(),
						Book.builder()
								.id(13L)
								.title("Eloquent Javascript")
								.authorName("Javascript King")
								.shareable(true)
								.lastModifiedDate(LocalDateTime.now())
								.isbn("ja15265353")
								.owner(user1)
								.createdBy(user1.getId())
								.lastModifiedBy(user1.getId())
								.archived(false)
								.synopsis("Javascript inside out")
								.build(),
						Book.builder()
								.id(14L)
								.title("Eloquent Go")
								.authorName("Go King")
								.shareable(true)
								.lastModifiedDate(LocalDateTime.now())
								.isbn("ja15265353")
								.owner(user1)
								.createdBy(user1.getId())
								.lastModifiedBy(user1.getId())
								.archived(false)
								.synopsis("Go inside out")
								.build(),
						Book.builder()
								.id(15L)
								.title("Eloquent Java")
								.authorName("Java King")
								.shareable(true)
								.lastModifiedDate(LocalDateTime.now())
								.isbn("ja15265353")
								.owner(user2)
								.createdBy(user2.getId())
								.lastModifiedBy(user2.getId())
								.archived(false)
								.synopsis("Java inside out")
								.build()
				);

				bookRepository.saveAll(books);
			}
		};
	}
}
