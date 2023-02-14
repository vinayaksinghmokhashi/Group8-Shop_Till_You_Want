package com.dao;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.model.ProductCategory;

@Service
public class CategoryDao {
	

	 @Autowired
	    ProductCategoryRepository productCategoryRepository;
	 public ProductCategory getCategoryProduct(int categoryType) {
		 
			return productCategoryRepository.findByCategoryType(categoryType);
		}
		
}
