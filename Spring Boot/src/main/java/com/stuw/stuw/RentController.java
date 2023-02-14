package com.stuw.stuw;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CartDao;
import com.dao.OrderDao;
import com.dao.ProductDao;
import com.dao.RentDao;
import com.model.Cart;
import com.model.Order;
import com.model.Product;
import com.model.Rent;

@RestController
@CrossOrigin
public class RentController {
	@Autowired
	RentDao rentDao;
	
	
	
	@Autowired
	ProductDao prodDao;
	

	

	
	
	 
	 @RequestMapping("/showAllRents/{emailId}")
		public List<Rent> showAllRents(@PathVariable("emailId") String emailId) {
			List<Rent> rent = rentDao.getAllRents(emailId);
			System.out.println("Inside Cart Controller:"+rent.toString());
			
			//System.out.println("WishList ProductId in controller:"+wishList.toString());
			return rent;
		}
	 
	 
	 
	 @RequestMapping("/addToRentsDirect")
	   public String addToRentsDirect(@RequestBody Map<String,String> params) {
			 String phone = params.get("args1");
			    String address = params.get("args2");
			    String state=params.get("args3");
			    String pincode=params.get("args4");
			    String email=params.get("args5");
			    String productId=params.get("args6");
			    String totalPrice=params.get("args7");
			    String count=params.get("args8");
			    System.out.println("Items in add to rent ProductId:"+productId+"Count"+count+"Total Price"+totalPrice);
			    Product product=prodDao.findForWishList(productId);
			   Rent rent = new Rent(1,email,Double.parseDouble(totalPrice),product,phone,address,state,pincode,Integer.parseInt(count));
				   rentDao.createRent(rent);
				   System.out.println("Direct rent created successfully");
				   prodDao.updateProductCount(Integer.parseInt(count),productId);
			return "This is Rents";      
	   }
	 
	 @GetMapping("/getAllRents")
		public List<Rent> getAllRents() {
	    
	    	
			return rentDao.getAllRents();
		}
		 
}
