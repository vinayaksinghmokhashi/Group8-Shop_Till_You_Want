package com.dao;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.WishList;



@Service
public class WishListDao {
	
	@Autowired
	WishListRepository wishListRepository;
	
	 public WishList createWishlist(WishList wishList) {
		 //System.out.println("We are in Dao");
	    	return wishListRepository.save(wishList);
	    }

	public List<WishList> getAllWishListProducts(String emailId) {
	//	System.out.println("Inside wishList dao with emaiId:"+emailId);
		return wishListRepository.getByEmail(emailId);
		
		
	}
//	 
//	 public String deleteFromWishList(WishList wishList) {
//		 System.out.println("We are in WishList delete Dao");
//		System.out.println(wishList.getProduct());
//		 wishListRepository.deleteByProductId(wishList.getProduct().getProductId(),wishList.getEmailId());
//	    	return "WishList Product deleted successfully";
//	    }
	 
	 public void deleteFromWishList(int id) {
		 System.out.println("Inside wishlist delete dao:"+id);
			wishListRepository.deleteById(id);
		}
	 
	// getAllWishListProducts(String emailId)
	 
}
