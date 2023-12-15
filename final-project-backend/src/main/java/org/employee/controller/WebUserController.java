package org.employee.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.employee.model.RoleUser;
import org.employee.model.WebUser;
import org.employee.repository.RoleRepository;
import org.employee.repository.WebUserRepository;
import org.employee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200/")
public class WebUserController {

	@Autowired
	private WebUserRepository webUserRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private UserService userservice;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/register")
	public ResponseEntity<?> employeeSignup(@RequestBody WebUser webuser) {
		HashMap<String, String> response = new HashMap<>();
		if (webUserRepo.existsByUsername(webuser.getUsername())) {
			response.put("message", "Username is already exist!!");
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}

		if (webUserRepo.existsByEmail(webuser.getEmail())) {
			response.put("message", "Email is already exist!!");
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}

		WebUser user1 = new WebUser();
		user1.setName(webuser.getName());
		user1.setEmail(webuser.getEmail());
		user1.setUsername(webuser.getUsername());
		user1.setPassword(passwordEncoder.encode(webuser.getPassword()));

		Optional<RoleUser> role = roleRepo.findByName("ROLE_EMPLOYEE");
		System.out.println(role.get());
		webuser.setRoles(Collections.singleton(role.get()));

		webUserRepo.save(user1);
		System.out.print(user1);
		response.put("message", "User Registered successfully");
		return new ResponseEntity<>(response, HttpStatus.OK);

	}

	@PostMapping("/login")
	public ResponseEntity<?> registerEmployee(@RequestBody WebUser webuser) {
		Map<String, String> response = new HashMap<>();

		try {
			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(webuser.getEmail(), webuser.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);

			response.put("message", "User logged-in successfully!");

			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			response.put("message", "Enter correct email and password");

			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/find/{email}")
	public Optional<WebUser> getUserName(@PathVariable String email) {
		return webUserRepo.findByEmail(email);
	}
}
