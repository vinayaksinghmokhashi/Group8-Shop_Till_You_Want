package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Order;
import com.model.Rent;

@Service
public class RentDao {
	@Autowired
	RentRepository rentRepository;

	public void createRent(Rent rent) {
		rentRepository.save(rent);
		
	}

	public List<Rent> getAllRents(String emailId) {
		
		return rentRepository.getByEmail(emailId);
	}
	
	public List<Rent> getAllRents() {
		return rentRepository.findAll();
	}
}
