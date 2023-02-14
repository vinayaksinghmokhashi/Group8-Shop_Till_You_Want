package com.stuw.stuw;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dao.ProductDao;
import com.model.Product;

@RestController
public class ProductController {
	@Autowired	//Dependency Injection
	ProductDao prodDao;
	
	@RequestMapping("/showAllProducts")
	public List<Product> showAllProducts() {
		List<Product> prodList = prodDao.getAllProducts();
		return prodList;
	}
	
	@RequestMapping("/getProductsMobile")
	public List<Product> getProductsMobile() {
		List <Product> prodMobileList = prodDao.getAllMobileProducts(0);
		return prodMobileList;
	}

	@RequestMapping("/getProductsSkinCare")
	public List<Product> getProductsSkinCare() {
		List <Product> prodSkinCareList = prodDao.getAllSkinCareProducts(1);
		return prodSkinCareList;
	}
	
	@RequestMapping("/getProductsHomeFurnishing")
	public List<Product> getProductsHomeFurnishing() {
		List <Product> prodHomeFurnishingList = prodDao.getAllHomeFurnishingProducts(2);
		return prodHomeFurnishingList;
	}
	
	@RequestMapping("/getProductsFashion")
	public List<Product> getProductsFashion() {
		List <Product> prodFashionList = prodDao.getAllFashionProducts(3);
		return prodFashionList;
	}
	
	 @GetMapping("/product/{productId}")
	    public Product showOne(@PathVariable("productId") String productId) {

	        Product product = prodDao.findOne(productId);
	        return product;
	    }

	
//    @GetMapping("/product")
//    public Page<Product> findAll(@RequestParam(value = "page", defaultValue = "1") Integer page,
//                                     @RequestParam(value = "size", defaultValue = "3") Integer size) {
//        PageRequest request = PageRequest.of(page - 1, size);
//        return prodDao.findAll((Pageable) request);
//    }
	
//	@GetMapping("/productall")
//    public ProductResponse findAll() {
//    	ProductResponse response=new ProductResponse();
//    	response.setProductList(prodDao.findAll());
//        return response;
//    }
	 
	 @PutMapping("/updateProductByAdmin")
		public String updateEmployee(@RequestBody Product product) {

			Product prod = prodDao.updateProduct(product);

			if (prod != null)
				return "Product Record Updated in the Database";

			return "Product Updation Failed!!!";
		}
	 
	 @PostMapping("/addProductByAdmin")
		public String addProduct(@RequestBody Product product) {
	         
			
			Product prod = prodDao.addProduct(product);
	      
			if (prod != null)
				return "Product add into the Database";

			return "Product addition Failed!!!";
		}
}
