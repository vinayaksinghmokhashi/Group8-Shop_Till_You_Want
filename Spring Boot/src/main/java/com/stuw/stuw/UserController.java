package com.stuw.stuw;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.UserDao;
import com.model.AES;
import com.model.Product;
import com.model.User;




@RestController
public class UserController {

    @Autowired    
	UserDao userDAO;
    
    public String Secretkey="1234";
    
    
    @GetMapping("/login/{emailId}/{password}")
	public User login(@PathVariable("emailId") String emailId, @PathVariable("password") String password) {
		//System.out.println(emailId);
    
    	String r=AES.encrypt(password, Secretkey);
		User user=userDAO.login(emailId,r);
    	if(user!=null)
    	{
  		return userDAO.login(emailId, r);
    		//return userDAO.login(emailId,password);
    	}
    	else
    		//return new Employee(0, "Employee Not Found!!!", 0.0, "", sqlDate, "", "", "");
    		return null;
		
    }
    @GetMapping("/getAllUsers")
	public List<User> getAllUsers() {
    
    	
		return userDAO.getAllUsers();
	}
    
    @PostMapping("/registerUser")
	public String registerUser(@RequestBody User user) {
    	String a=user.getPassword();
  	  String b=AES.encrypt(a, Secretkey);
  	  user.setPassword(b);
		User user1 = userDAO.registerUser(user);
        //System.out.println("Hi Shekhar Pal");
		if (user1 != null)
			return "User Registered into the Database";

		return "User Registeration Failed!!!";
	}
    
    @GetMapping("/checkMailId/{emailId}")
   	public User checkMailId(@PathVariable("emailId") String emailId) {
   		//System.out.println(emailId);
       
       
   		User user=userDAO.checkMailId(emailId);
       	if(user!=null)
       	{
     		return userDAO.checkMailId(emailId);
       		//return userDAO.login(emailId,password);
       	}
       	else
       		//return new Employee(0, "Employee Not Found!!!", 0.0, "", sqlDate, "", "", "");
       		return null;
   		
       }
    
    @PutMapping("/updatePassword")
	public void updatePassword(@RequestBody Map<String,String> params) {
    	String newPassword = params.get("args1");
	    String emailId = params.get("args2");
	    System.out.println("New Password is;"+newPassword);
	    System.out.println("Email id is:"+emailId);
	    String r=AES.encrypt(newPassword, Secretkey);
		 userDAO.updatePassword(r,emailId);
	}
}



//    @PostMapping("/register")
  
