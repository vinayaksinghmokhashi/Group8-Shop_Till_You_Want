package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Donate;


@Service
public class DonateDao {
	
	@Autowired
	DonateRepository dr;
	
	public List<Donate> getAllDepartments() {
		return dr.findAll();
	}
	
	public Donate getDeptById(int dId) {
		return dr.findById(dId).orElse(null);
	}
	
	public Donate DonarRegistration(Donate donate) {
		return dr.save(donate);
	}
	
	
}
