package com.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Cart;
import com.model.WishList;


@Service
public class CartDao {

	@Autowired
	CartRepository cartRepository;
	
	public Cart createCart(Cart cart) {
		return cartRepository.save(cart);
	}
	public List<Cart> getAllCartProducts(String emailId) {
		//	System.out.println("Inside wishList dao with emaiId:"+emailId);
		
			return cartRepository.getByEmail(emailId);
			
			
		}
	 public void deleteFromCart(int id) {
		 System.out.println("Inside cart delete dao:"+id);
			cartRepository.deleteById(id);
		}
	 
	 public double getCheckoutPrice(String emailId){
		 //System.out.println("Inside cart checkout price:"+emailId);
		// System.out.println("Result returned by get cart total:"+cartRepository.getCartTotal(emailId));
		 return cartRepository.getCartTotal(emailId);
	 }
	 @Test
	 @Transactional
	public void deleteItemsFromCart(String email) {
		cartRepository.deleteByEmailId(email);
	}


}
