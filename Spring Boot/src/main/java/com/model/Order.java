package com.model;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "orders")
public class Order {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderId;
	
	private int id;
	
	
	
	@CreationTimestamp
    private Date date;
	
	private String emailId;
    
	private String phone;
	private String address;
	private String state;
	private String pincode;
	
	private double totalPrice;
	
	 @ManyToOne()
	    @JoinColumn(name = "productId")
	    private Product product;
	 
	

	public Order() {
		super();
	}



//	public Order(int id, String emailId, double totalPrice, Product product) {
//		super();
//		this.id = id;
//		this.emailId = emailId;
//		this.totalPrice = totalPrice;
//		this.product = product;
//	}
	
	
	public Order( int id,String emailId, double totalPrice,  Product product,String phone, String address, String state, String pincode) {
		super();
		
		this.id = id;
		
		this.emailId = emailId;
		this.phone = phone;
		this.address = address;
		this.state = state;
		this.pincode = pincode;
		this.totalPrice = totalPrice;
		this.product = product;
	}



	public int getId() {
		return id;
	}



	


	public void setId(int id) {
		this.id = id;
	}



	public int getOrderId() {
		return orderId;
	}



	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}





	public String getEmailId() {
		return emailId;
	}



	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}



	public double getTotalPrice() {
		return totalPrice;
	}



	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}



	public Product getProduct() {
		return product;
	}



	public void setProduct(Product product) {
		this.product = product;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}


	

	public String getPhone() {
		return phone;
	}



	public void setPhone(String phone) {
		this.phone = phone;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	public String getPincode() {
		return pincode;
	}



	public void setPincode(String pincode) {
		this.pincode = pincode;
	}



	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", id=" + id + ", date=" + date + ", emailId=" + emailId + ", phone="
				+ phone + ", address=" + address + ", state=" + state + ", pincode=" + pincode + ", totalPrice="
				+ totalPrice + ", product=" + product + "]";
	}



	



	
	
	 
	                       

}
