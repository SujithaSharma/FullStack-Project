package org.employee.configuration;


import org.employee.repository.WebUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import jakarta.servlet.http.HttpServlet;

@Configuration
@EnableMethodSecurity
public class SpringSecurityConfiguration {
	
	@Autowired
	WebUserRepository webuserRepo;
	
	@Bean
	public AuthenticationManager AuthenticationManager(AuthenticationConfiguration authenticationConfig)throws Exception  {
		return authenticationConfig.getAuthenticationManager();
	}
	
	@Bean
	public static PasswordEncoder PasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean 
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
	{
		http.csrf().disable()
		    .authorizeHttpRequests((authorize) ->
		     authorize.requestMatchers(HttpMethod.GET,"/employee/**").permitAll()
		     .requestMatchers(HttpMethod.POST,"/employee/**").permitAll()
		     .requestMatchers(HttpMethod.GET,"/employees/**").permitAll()
		     .requestMatchers(HttpMethod.GET,"/user/**").permitAll()
		     .requestMatchers(HttpMethod.POST,"/email").permitAll()
		     .requestMatchers("/user/**").permitAll()
		     .requestMatchers("/employee/**").permitAll()
		     .anyRequest().authenticated()
		     
		    		);
		return http.build();
	}
	
    @Bean
    public JavaMailSender javaMailSender() {
        return new JavaMailSenderImpl();
    }
	
}
