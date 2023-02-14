package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Cart;
import com.model.Order;



public interface OrderRepository extends JpaRepository<Order,Integer> {
     
	@Query("from Order o where o.emailId= :emailId")
	List<Order> getByEmail(@Param("emailId") String emailId);
	

}
