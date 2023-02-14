package com.dao;



import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.User;


@Service
public class UserDao {

	@Autowired
	UserRepository userRepository;

	public User login(String emailId, String password) {		
		return userRepository.login(emailId, password);
	}
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	public User registerUser(User user) {
		return userRepository.save(user);
	}
	public User checkMailId(String emailId) {
		return userRepository.findUser(emailId);
		
	}
	
	@Test
	@Transactional
	public void updatePassword(String newPassword, String emailId) {
		 userRepository.updatePassword(newPassword,emailId);
		
	}
}