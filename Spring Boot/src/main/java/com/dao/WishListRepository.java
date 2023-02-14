package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Product;
import com.model.WishList;

public interface WishListRepository extends JpaRepository<WishList,Integer>{

	
	@Query("from WishList w where w.emailId= :emailId")
	List<WishList> getByEmail(@Param("emailId") String emailId);
	
//	
//	@Query("from WishList w where w.product= :productId and w.emailId=:emailId")
//	String deleteByProductId(@Param("productId")String productId,@Param("emailId")String emailId);
}
