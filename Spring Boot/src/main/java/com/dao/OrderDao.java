package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Order;
import com.model.User;

@Service
public class OrderDao {
	
	@Autowired
	OrderRepository orderRepository;

	public void createOrder(Order order) {
		orderRepository.save(order);
		
	}

	public List<Order> getAllOrders(String emailId) {
		
		return orderRepository.getByEmail(emailId);
	}
	
	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

}
