//package com.model;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "discount")
//public class Discount {
//
//	@Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private int id;
//	
//	private int couponId;
//	
//	private String couponName;
//
//	
//	
//	public Discount() {
//		super();
//	}
//
//	public Discount(int couponId, String couponName) {
//		super();
//		this.couponId = couponId;
//		this.couponName = couponName;
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public int getCouponId() {
//		return couponId;
//	}
//
//	public void setCouponId(int couponId) {
//		this.couponId = couponId;
//	}
//
//	public String getCouponName() {
//		return couponName;
//	}
//
//	public void setCouponName(String couponName) {
//		this.couponName = couponName;
//	}
//
//	@Override
//	public String toString() {
//		return "Discount [id=" + id + ", couponId=" + couponId + ", couponName=" + couponName + "]";
//	}
//	
//	
//}
