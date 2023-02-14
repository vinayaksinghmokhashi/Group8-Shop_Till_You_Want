package com.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Product;


@Service
public class ProductDao {
	@Autowired
	ProductRepository productRepository;

//	  Page<Product> findAll(Pageable pageable);
//	public List<Product> getAllProducts() {
//		// TODO Auto-generated method stub
//		List<Product> prodList = productRepository.findAll();
//		return prodList;
//	}
//	Page<Product> findAllInCategory(Integer categoryType, Pageable pageable);

	
	public List<Product> getAllProducts() {
		List<Product> prodList = productRepository.findAll();
		return prodList;
	}
	public List<Product> getAllMobileProducts(int categoryType) {
		//int cat=0;
	List<Product> prodMobileList =productRepository.findMobileProduct(categoryType);
		 return prodMobileList;
	}
	public List<Product> getAllSkinCareProducts(int categoryType) {
		//int cat=0;
	List<Product> prodSkinCareList =productRepository.findSkinCareProduct(categoryType);
		 return prodSkinCareList;
	}
	public List<Product> getAllHomeFurnishingProducts(int categoryType) {
		//int cat=0;
	List<Product> prodHomeFurnishingList =productRepository.findHomeFurnishingProduct(categoryType);
		 return prodHomeFurnishingList;
	}
	public List<Product> getAllFashionProducts(int categoryType) {
		//int cat=0;
	List<Product> prodFashionList =productRepository.findFashionProduct(categoryType);
		 return prodFashionList;
	}
	 public Product findOne(String productId) {
           // System.out.println("Inside product dao with product id:"+productId);
	        Product prod =  productRepository.findByProductId(productId);
	       // System.out.println("The product returned is:");
	       // System.out.println(prod.toString());
	        return prod;
	    }
	 
	 public Product findForWishList(String productId) {
         System.out.println("Inside findForWishList with product id:"+productId);
	        Product prod =   productRepository.findByWishListId(productId);
	        System.out.println("The product returned for findForWishList:");
	        System.out.println(prod.toString());
	        return  prod;
	    }
	 
	public Product updateProduct(Product product) {
		
		return productRepository.save(product);
	}
	public Product addProduct(Product product) {
		
		return productRepository.save(product);
	}
	
	@Test
	@Transactional
	public void updateProductCount(int count, String productId) {
		productRepository.updateCount(count,productId);
		
	}

	 
//	 public Product removeFromWishList(String productId) {
//         System.out.println("Inside removeFromWishList with product id:"+productId);
//	        Product prod =   productRepository.findByWishListId(productId);
//	        System.out.println("The product returned for removeFromWishList:");
//	        System.out.println(prod.toString());
//	        return  prod;
//	    }
}



