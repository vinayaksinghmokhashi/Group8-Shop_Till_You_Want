package com.stuw.stuw;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.EmailSenderDao;
import com.model.EmailMessage;

@RestController
public class EmailController {
	
	
		
		private final EmailSenderDao ess;
		
		public EmailController(EmailSenderDao emss){
			this.ess=emss;
		}

		@RequestMapping("/send-email")
		public ResponseEntity sendMail(@RequestBody EmailMessage em){
			this.ess.sendEmail(em.getTo(), em.getSubject(), em.getMessage());
			return ResponseEntity.ok("Success");
		}
}
