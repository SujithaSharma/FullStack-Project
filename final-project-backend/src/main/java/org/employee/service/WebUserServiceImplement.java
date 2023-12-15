package org.employee.service;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.employee.model.RoleUser;
import org.employee.model.WebUser;
import org.employee.repository.WebUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class WebUserServiceImplement implements UserDetailsService,UserService{
	
	@Autowired
	WebUserRepository userrepo;
	
	@Autowired
	private JavaMailSender javaMailSender;

	@Override
	public UserDetails loadUserByUsername(String usernameorEmail) throws UsernameNotFoundException {
		try {
			WebUser user = userrepo.findByEmailOrUsername(usernameorEmail, usernameorEmail).orElseThrow(() -> new Exception("User is wrong !"));
		return new User(user.getEmail(),user.getPassword(),mapRoleToWebUser(user.getRoles()));
		}
		catch(Exception e){
			
		}
		return null;
	}
	
	public Collection<? extends GrantedAuthority> mapRoleToWebUser(Set<RoleUser> roles)
	{
		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());	
	}

	@Override
	public void sendEmail(String toEmail, String subject, String message) {
        SimpleMailMessage mailMessage=new SimpleMailMessage();
        
        mailMessage.setTo(toEmail);
        mailMessage.setSubject(subject);
        mailMessage.setText(message);
        mailMessage.setFrom("sujithavenkat2508@gmail.com");
        javaMailSender.send(mailMessage);
	}
}
