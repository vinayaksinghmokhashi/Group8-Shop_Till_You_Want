package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Order;
import com.model.Rent;

public interface RentRepository extends JpaRepository<Rent,Integer>{
	
	@Query("from Rent r where r.emailId= :emailId")
	List<Rent> getByEmail(@Param("emailId") String emailId);
}
