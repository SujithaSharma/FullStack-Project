package org.employee.controller;

import org.employee.service.WebUserServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class MailSenderController {
	    @Autowired
	    private WebUserServiceImplement userService;
	    
	    @RequestMapping("/email")
	    public ResponseEntity<?> signup(@RequestBody String email)
	    {
	        String subject="Registration Successfull!!";
	        String content="Welcome to the community!!";
	        userService.sendEmail(email, subject, content);
	        return new ResponseEntity<>("Email send",HttpStatus.OK);
	    }
	    
}


