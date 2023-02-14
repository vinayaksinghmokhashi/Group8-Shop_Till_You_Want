package com.dao;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;



@Service
public class EmailSenderDao implements EmailSenderService {

	private final JavaMailSender mailsender;
	
	 public EmailSenderDao(JavaMailSender mailSender) {
		this.mailsender=mailSender;
	}
	
	@Override
	public void sendEmail(String to, String subject, String message) {

		SimpleMailMessage smm=new SimpleMailMessage();
		
		smm.setTo(to);
		smm.setSubject(subject);
		smm.setText(message);
		
		this.mailsender.send(smm);
		
	}


}
