package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {




	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
	private String emailId;
	
	private double totalPrice;
	
	private int quantity;
	
	                       

	 @ManyToOne()
	    @JoinColumn(name = "productId")
	    private Product product;
	 
	 public Cart() {
			super();
		}
	
	public Cart(Product product,String emailId,double totalPrice,int quantity) {
		super();
		this.emailId = emailId;
		this.product = product;
		this.totalPrice=totalPrice;
		this.quantity=quantity;
	}
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	
    

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", emailId=" + emailId + ", totalPrice=" + totalPrice + ", quantity=" + quantity
				+ ", product=" + product + "]";
	}

	

	
	
}
