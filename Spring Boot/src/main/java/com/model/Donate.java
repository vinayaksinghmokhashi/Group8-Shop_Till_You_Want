package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Donate {
	
	@Id@GeneratedValue
	private long ID;
	private long dId;
	private String dName;
	private String item;
	private String gender;
	private String dod;
	private String emailId;
	private String address;
	private String imagePath;
	
	public Donate(){}

	public Donate(long dId, String dName, String item, String gender, String dod, String emailId, String address,
			String imagePath) {
		super();
		this.dId = dId;
		this.dName = dName;
		this.item = item;
		this.gender = gender;
		this.dod = dod;
		this.emailId = emailId;
		this.address = address;
		this.imagePath = imagePath;
	}

	
	
	public long getID() {
		return ID;
	}

	public void setID(long iD) {
		this.ID = iD;
	}

	public long getdId() {
		return dId;
	}

	public void setdId(long dId) {
		this.dId = dId;
	}

	public String getdName() {
		return dName;
	}

	public void setdName(String dName) {
		this.dName = dName;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDod() {
		return dod;
	}

	public void setDod(String dod) {
		this.dod = dod;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	@Override
	public String toString() {
		return "Donate [dId=" + dId + ", dName=" + dName + ", item=" + item + ", gender=" + gender + ", dod=" + dod
				+ ", emailId=" + emailId + ", address=" + address + ", imagePath=" + imagePath + "]";
	}

}