package org.employee.service;

import java.util.List;

import org.employee.model.WebUser;

public interface UserService {
	public void sendEmail(String toEmail, String subject, String message);
}
