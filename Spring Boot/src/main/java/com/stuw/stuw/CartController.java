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

import com.dao.CartDao;
import com.dao.ProductDao;
import com.dao.WishListDao;
import com.model.Cart;
import com.model.Product;
import com.model.WishList;

@RestController
@CrossOrigin
public class CartController {

	@Autowired
	ProductDao prodDao;
	
	@Autowired
	CartDao cartDao;
	
	 @PostMapping("/addToCart")
     public String addToCart(@RequestBody Map<String,String> params) {
		 String productId = params.get("args1");
		    String emailId = params.get("args2");
		    String totalPrice=params.get("args3");
		    String quantity=params.get("args4");
		    System.out.println("Total Price of this product is:"+Double.parseDouble(totalPrice));
		 //System.out.println("Product Id:"+productId.toString());
		 
		// System.out.println("WishList EmailId:"+emailId);
		Product product=prodDao.findForWishList(productId);
		//System.out.println(product.getProductName());
		 Cart cart = new Cart(product,emailId,Double.parseDouble(totalPrice),Integer.parseInt(quantity));
		 Cart cartCreated = cartDao.createCart(cart);
		return "This is Cart";
            
     }
	 
	 @RequestMapping("/showAllCartProducts/{emailId}")
		public List<Cart> showAllCartProducts(@PathVariable("emailId") String emailId) {
			List<Cart> cart = cartDao.getAllCartProducts(emailId);
			System.out.println("Inside Cart Controller:"+cart);
			//System.out.println("WishList ProductId in controller:"+wishList.toString());
			return cart;
		}
	 
	 @DeleteMapping("/removeFromCart/{id}")
		public String removeFromCart(@PathVariable("id") int id) {
		 System.out.println("Inside cart remove controller:"+id);
			cartDao.deleteFromCart(id);
			return "Product Id(" + id + ") Record Deleted Successfully!";
		}
  
	 @RequestMapping("/getCheckoutPrice/{emailId}")
		public double getCheckoutPrice(@PathVariable("emailId") String emailId) {
			double cart = cartDao.getCheckoutPrice(emailId);
			//System.out.println("WishList ProductId in controller:"+wishList.toString());
			return cart;
		}
	 
}
