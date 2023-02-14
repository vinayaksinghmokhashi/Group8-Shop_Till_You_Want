package com.stuw.stuw;

import java.time.LocalDateTime;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Otp;
import com.twilio.Twilio;
import com.twilio.rest.verify.v2.service.Verification;
import com.twilio.rest.verify.v2.service.VerificationCheck;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(path = "api/phoneNumber")
@Slf4j
public class PhoneNumberVerificationController {
	 @GetMapping(value = "/generateOTP/{mobile}")
	    public ResponseEntity<String> generateOTP(@PathVariable("mobile") String mobile){
	       
	        Twilio.init((TWILIO_ACCOUNT_SID), (TWILIO_AUTH_TOKEN));

	        Verification verification = Verification.creator(
	                        "VAae3efc22ab41ff32d91c4439386ca7ea", // this is your verification sid
	                        mobile, //this is your Twilio verified recipient phone number
	                        "sms") // this is your channel type
	                .create();
	        
	        System.out.println(verification.getStatus());


//	      log.info("OTP has been successfully generated, and awaits your verification {}", LocalDateTime.now());

	       return new ResponseEntity<>( "Your OTP has been sent to your verified phone number", HttpStatus.OK);
	    }

	 @GetMapping("/verifyOTP/{mobile}/{otp}")
	    public Otp verifyUserOTP(@PathVariable("mobile") String mobile,@PathVariable("otp") String otp) throws Exception {
	        
		 	Twilio.init("ACa299cd328e411b5573e48d340f28a99f", "fe7226b87d2e63e4a879ecdf0842e1d2");
	        Otp otp_new = new Otp();
	        otp_new.setVerificationStatus("Failed");
	        //String msg="Failed";
		 	
	        try {

	            VerificationCheck verificationCheck = VerificationCheck.creator(
	                            "VAae3efc22ab41ff32d91c4439386ca7ea")
	                    .setTo(mobile)
	                    .setCode(otp)
	                    .create();
	            otp_new.setVerificationStatus(verificationCheck.getStatus());
	            //System.out.println(verificationCheck.getStatus());
	            

	        } catch (Exception e) {
	        	 return otp_new;
	        }
	        
	        return otp_new;
	    }
	 
}

