package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Cart;



public interface CartRepository extends JpaRepository<Cart,Integer>{
	@Query("from Cart c where c.emailId= :emailId")
	List<Cart> getByEmail(@Param("emailId") String emailId);

	
	@Query("Select SUM(c.totalPrice) from Cart c  where c.emailId=:emailId")
	double getCartTotal(@Param("emailId") String emailId);

	@Modifying
    @Query("Delete from Cart c where c.emailId=:emailId")
	void deleteByEmailId(@Param("emailId") String emailId);

}
