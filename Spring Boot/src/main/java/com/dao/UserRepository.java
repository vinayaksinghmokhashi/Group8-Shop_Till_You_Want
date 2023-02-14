package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {

	
	@Query("from User e where e.emailId = :emailId and e.password = :password")
	User login(@Param("emailId") String emailId, @Param("password") String password);

	
	@Query("from User e where e.emailId=:emailId")
	User findUser(@Param("emailId") String emailId);

	@Modifying
    @Query("Update User u Set u.password=:newPassword where u.emailId=:emailId")
	void updatePassword(@Param("newPassword") String newPassword,@Param("emailId") String emailId);

}
