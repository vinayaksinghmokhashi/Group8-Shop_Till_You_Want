package com.stuw.stuw;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CartDao;
import com.dao.OrderDao;
import com.dao.ProductDao;
import com.model.Cart;
import com.model.Order;
import com.model.Product;
import com.model.User;

@RestController
@CrossOrigin
public class OrderController {

	@Autowired
	OrderDao orderDao;
	
	@Autowired
	CartDao cartDao;
	
	@Autowired
	ProductDao prodDao;
	
//	 @RequestMapping("/addToOrders/{emailId}/{phone}")
//     public String addToOrders(@PathVariable ("emailId") String emailId) {
//		    System.out.println("Email id in Order is:"+emailId);
//		List <Cart> cart=cartDao.getAllCartProducts(emailId);
//		System.out.println("Cart Dao executed successfully:");
//		System.out.println("Cart is:"+cart);
//		for(Cart item:cart){
//			System.out.println("Item id is:"+item.getId() + "Item email id is:"+item.getEmailId()+ "Item total price is:" + item.getTotalPrice()+ "Item product is:" + item.getProduct().toString());
//			 Order order = new Order(item.getId(),item.getEmailId(),item.getTotalPrice(),item.getProduct());
//			   orderDao.createOrder(order);
//			   System.out.println("order created successfully");
//		}
//		
//		return "This is Orders";
//            
//     }
	
	
//	@RequestMapping("/addToOrders/{phone}/{address}/{state}/{pincode}/{emailId}")
//    public String addToOrders(@PathVariable ("phone") String phone,@PathVariable ("address") String address,@PathVariable ("state") String state,@PathVariable ("pincode") String pincode,@PathVariable ("emailId") String emailId) {
//		    System.out.println("Email id in Order is:"+emailId);
//		List <Cart> cart=cartDao.getAllCartProducts(emailId);
//		System.out.println("Cart Dao executed successfully:");
//		System.out.println("Cart is:"+cart);
//		for(Cart item:cart){
//			System.out.println("Item id is:"+item.getId() + "Item email id is:"+item.getEmailId()+ "Item total price is:" + item.getTotalPrice()+ "Item product is:" + item.getProduct().toString()+"phone :"+phone+"address: "+address+" pincode"+pincode);
//		    Order order = new Order(item.getId(),item.getEmailId(),item.getTotalPrice(),item.getProduct(),phone,address,state,pincode);
//
//			   orderDao.createOrder(order);
//			   System.out.println("order created successfully");
//		}
//		
//		return "This is Orders";
//           
//    }
	
	 @RequestMapping("/addToOrders")
   public String addToOrders(@RequestBody Map<String,String> params) {
		 String phone = params.get("args1");
		    String address = params.get("args2");
		    String state=params.get("args3");
		    String pincode=params.get("args4");
		    String email=params.get("args5");
		   // System.out.println("Email id in Order is:"+emailId);
		List <Cart> cart=cartDao.getAllCartProducts(email);
		System.out.println("Cart Dao executed successfully:");
		System.out.println("Cart is:"+cart);
		for(Cart item:cart){
			System.out.println("Item id is:"+item.getId() + "Item email id is:"+item.getEmailId()+ "Item total price is:" + item.getTotalPrice()+ "Item product is:" + item.getProduct().toString());
			 Order order = new Order(item.getId(),item.getEmailId(),item.getTotalPrice(),item.getProduct(),phone,address,state,pincode);
			   orderDao.createOrder(order);
			   prodDao.updateProductCount(item.getQuantity(),item.getProduct().getProductId());
			   System.out.println("order created successfully");
		}
		cartDao.deleteItemsFromCart(email);
		
		return "This is Orders";
          
   }
	 
	 @RequestMapping("/showAllOrders/{emailId}")
		public List<Order> showAllOrders(@PathVariable("emailId") String emailId) {
			List<Order> order = orderDao.getAllOrders(emailId);
			System.out.println("Inside Cart Controller:"+order.toString());
			
			//System.out.println("WishList ProductId in controller:"+wishList.toString());
			return order;
		}
	 
	 
	 
	 @RequestMapping("/addToOrdersDirect")
	   public String addToOrdersDirect(@RequestBody Map<String,String> params) {
			 String phone = params.get("args1");
			    String address = params.get("args2");
			    String state=params.get("args3");
			    String pincode=params.get("args4");
			    String email=params.get("args5");
			    String productId=params.get("args6");
			    String totalPrice=params.get("args7");
			    String count=params.get("args8");
			    
			    Product product=prodDao.findForWishList(productId);
			   Order order = new Order(1,email,Double.parseDouble(totalPrice),product,phone,address,state,pincode);
				   orderDao.createOrder(order);
				   System.out.println("Direct order created successfully");
				   prodDao.updateProductCount(Integer.parseInt(count),productId);
			return "This is Orders";      
	   }
	 
	 @GetMapping("/getAllOrders")
		public List<Order> getAllOrders() {
	    
	    	
			return orderDao.getAllOrders();
		}
		 
}
