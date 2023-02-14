package com.stuw.stuw;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.ProductDao;
import com.dao.WishListDao;
import com.model.Product;
import com.model.WishList;

@RestController
@CrossOrigin
public class WishListController {
	
	@Autowired
	ProductDao prodDao;
	
	@Autowired
	WishListDao wishListDao;
	
	 @PostMapping("/addToWishList")
     public String addWishList(@RequestBody Map<String,String> params) {
		 String productId = params.get("args1");
		    String emailId = params.get("args2");
		 //System.out.println("Product Id:"+productId.toString());
		 
		// System.out.println("WishList EmailId:"+emailId);
		Product product=prodDao.findForWishList(productId);
		//System.out.println(product.getProductName());
		 WishList wishList = new WishList(product,emailId);
		 WishList wishListCreated = wishListDao.createWishlist(wishList);
		return "This is WishList";
            
     }
	 
//	 @DeleteMapping("/removeFromWishList/{productId}/{emailId}")
//		public String removeFromWishList(@PathVariable("productId") String productId, @PathVariable("emailId") String emailId) {
//		System.out.println("Product id is:"+productId+"Email Id is:"+emailId);	
//	 Product product=prodDao.findForWishList(productId);
//			 WishList wishList = new WishList(product,emailId);
//			return wishListDao.deleteFromWishList(wishList);
//			//return "This is WishList";
//			//return "Product from WishList(" + productId + ") Record Deleted Successfully!";
//		}
	 
	 @DeleteMapping("/removeFromWishList/{id}")
		public String removeFromWishList(@PathVariable("id") int id) {
		 System.out.println("Inside wishlist remove controller:"+id);
			wishListDao.deleteFromWishList(id);
			return "Product Id(" + id + ") Record Deleted Successfully!";
		}

	 
	 @RequestMapping("/showAllWishListProducts/{emailId}")
		public List<WishList> showAllWishListProducts(@PathVariable("emailId") String emailId) {
			List<WishList> wishList = wishListDao.getAllWishListProducts(emailId);
			//System.out.println("WishList ProductId in controller:"+wishList.toString());
			return wishList;
		}
	 
	 
}
