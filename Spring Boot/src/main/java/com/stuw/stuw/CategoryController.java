package com.stuw.stuw;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dao.CategoryDao;

import com.model.ProductCategory;




@RestController
@CrossOrigin
public class CategoryController {
    @Autowired
    CategoryDao categoryDao;
   


//    @GetMapping("/category/{type}")
//    public CategoryPage showOne(@PathVariable("type") Integer categoryType,
//                                @RequestParam(value = "page", defaultValue = "1") Integer page,
//                                @RequestParam(value = "size", defaultValue = "3") Integer size) {
//
//        ProductCategory cat = categoryDao.findByCategoryType(categoryType);
//        PageRequest request = PageRequest.of(page - 1, size);
//        Page<Product> productInCategory = productDao.findAllInCategory(categoryType, (Pageable) request);
//        CategoryPage tmp = new CategoryPage("", productInCategory);
//        tmp.setCategory(cat.getCategoryName());
//        return tmp;
//    }
    
	@GetMapping("/category/{type}")
	public ProductCategory getProductById(@PathVariable("type") int categoryType) {
		
		ProductCategory pc= categoryDao.getCategoryProduct(categoryType);
		//System.out.println(pc);	
		return pc;
	}
	
}
