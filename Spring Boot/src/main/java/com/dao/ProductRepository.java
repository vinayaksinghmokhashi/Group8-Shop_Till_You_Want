package com.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Product;


public interface ProductRepository extends JpaRepository <Product,Integer>{

//	 Page<Product> findAllByCategoryTypeOrderByProductIdAsc(Integer categoryType, Pageable pageable);
//	
//	 Page<Product> findAllByOrderByProductId(Pageable pageable);
	@Query("from Product p where p.categoryType = :categoryType")
	List <Product> findMobileProduct(@Param("categoryType") int categoryType);
	
	@Query("from Product p where p.categoryType = :categoryType")
	List <Product> findSkinCareProduct(@Param("categoryType") int categoryType);
	
	@Query("from Product p where p.categoryType = :categoryType")
	List <Product> findHomeFurnishingProduct(@Param("categoryType") int categoryType);

	@Query("from Product p where p.categoryType = :categoryType")
	List <Product> findFashionProduct(@Param("categoryType") int categoryType);
	
	@Query("from Product p where p.productId= :productId")
	Product findByProductId(@Param("productId") String productId);
	
	@Query("from Product p where p.productId= :productId")
	Product findByWishListId(@Param("productId") String productId);

//	@Query("Update Product p Set p.productStock=p.productStock-count where p.productId=:productId")
	
	@Modifying
	//@Query("Select p.productStock-:count from Product p where p.productId=:productId").
	@Query("Update Product p Set p.productStock=p.productStock-:count where p.productId=:productId")
	void updateCount(@Param("count")int count, @Param("productId")String productId);


}
