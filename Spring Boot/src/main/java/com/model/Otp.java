package com.model;

public class Otp {
	private String verificationStatus;


	public Otp() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Otp(String verificationStatus) {
		super();
		this.verificationStatus = verificationStatus;
	}

	public String getVerificationStatus() {
		return verificationStatus;
	}

	public void setVerificationStatus(String verificationStatus) {
		this.verificationStatus = verificationStatus;
	}

	@Override
	public String toString() {
		return "Otp [verificationStatus=" + verificationStatus + "]";
	}
	

}