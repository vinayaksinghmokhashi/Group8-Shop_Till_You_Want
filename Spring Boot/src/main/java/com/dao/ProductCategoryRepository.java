package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Integer>{

	//ProductCategory findByNaturalId(int categoryType);
	//ProductCategory findByCategoryType(Integer categoryType);

	@Query("from ProductCategory pc where pc.categoryType = :categoryType")
	ProductCategory findByCategoryType(@Param("categoryType") int categoryType);
}
