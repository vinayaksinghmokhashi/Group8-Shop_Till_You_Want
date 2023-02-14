package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Donate;

public interface DonateRepository extends JpaRepository<Donate, Integer>{

}
