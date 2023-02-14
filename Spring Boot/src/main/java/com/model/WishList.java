package com.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "wishlist")
public class WishList {


	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
	private String emailId;
	
	                       

	 @ManyToOne()
	    @JoinColumn(name = "productId")
	    private Product product;
	 
	 public WishList() {
			super();
		}
	
	public WishList(Product product,String emailId) {
		super();
		this.emailId = emailId;
		this.product = product;
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

	@Override
	public String toString() {
		return "WishList [id=" + id + ", emailId=" + emailId + ", product=" + product + "]";
	}
	
	

	
	 
	 

	 
}
