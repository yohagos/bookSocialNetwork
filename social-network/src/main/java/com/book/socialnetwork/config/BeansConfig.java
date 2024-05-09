package com.book.socialnetwork.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Collections;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class BeansConfig {

    // not recommended for production
    // ":*" will allow everything, if origins in application-dev is empty
    /*@Value("${application.cors.origins:*}")
    private List<String> allowedOrigins;*/

    // private final UserDetailsService userDetailsService;

    @Value("${application.security.oauth2.resourceserver.jwt.issuer-uri}")
    private String issuerUri;

    /*@Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(getPasswordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }*/

    /*@Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }*/

    @Bean
    public AuditorAware<String> auditorAware() {
        return new ApplicationAuditAware();
    }


    @Bean
    public CorsFilter corsFilter() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        final CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(
                List.of("http://localhost:4200", "http://localhost:9090")
        );
        config.setAllowedHeaders(
                List.of(
                        "*"
                ) // not recommended for production
        );
        config.setAllowedMethods(
                List.of(
                        "*"
                ) // not recommended for production
        );
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        return JwtDecoders.fromIssuerLocation(issuerUri);
    }
}
