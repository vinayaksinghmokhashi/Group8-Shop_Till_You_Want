import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // private productUrl = `${apiUrl}/product`;
  private categoryUrl = `${apiUrl}/category`;
  productIdFromBuyNowDetails: any;
  totalPriceFromDetails:any;
  editProduct:any;
  productCount:any;
  cartlength:any;

  constructor(private httpClient:HttpClient) { }
  getAllProducts() {
    return this.httpClient.get("/showAllProducts");
  }

  getAllWishListProducts(emailId:any){

    return this.httpClient.get("/showAllWishListProducts/"+emailId);
  }

  getAllCartProducts(emailId:any){

    return this.httpClient.get("/showAllCartProducts/"+emailId);
  }
  getAllOrders(emailId:any){
    return this.httpClient.get("/showAllOrders/"+emailId);
  }

  getAllRents(emailId:any){
    return this.httpClient.get("/showAllRents/"+emailId);
  }

  addToOrders(UserDetailsForm:any,email:any){
    let args={
      args1:UserDetailsForm.phone,
      args2:UserDetailsForm.address,
      args3:UserDetailsForm.state,
      args4:UserDetailsForm.pincode,
      args5:email
     }
  return this.httpClient.post("/addToOrders",args)
  }
 
  getAllProductsMobile(){
    return this.httpClient.get("/getProductsMobile");
  }

  getAllProductsSkinCare(){
    return this.httpClient.get("/getProductsSkinCare");
  }

  getAllProductsHomeFurnishing(){
    return this.httpClient.get("/getProductsHomeFurnishing");
  }
  getAllProductsFashion(){
    return this.httpClient.get("/getProductsFashion");
  }

 getProductsByCategoryType(productsC:any){
  console.log(productsC)
  return this.httpClient.get("/category/" + productsC);
 }

 getDetail(id: String) {
//  const url = `$/${id}`;
  return this.httpClient.get("/product/"+id);
}

addToWishList(productId:any,user:any){
 let args={
  args1:productId,
  args2:user.email
 }
 console.log("Inside service for wishList:"+args)
  console.log(productId);
  
 return this.httpClient.post("/addToWishList", args);
  
  //const url=this.wishListUrl+"/add/"+productId;
        //return this.httpClient.post("/addToWishList",product);
}

addToCart(productId:any,user:any,totalPrice:any,quantity:any){
  let args={
    args1:productId,
    args2:user.email,
    args3:totalPrice,
    args4:quantity
   }
   console.log(productId,user.email,totalPrice);
   return this.httpClient.post("/addToCart",args);
}

getCheckoutAmount(emailId:any){
  console.log("Inside get checkout amount with emailId:"+emailId);
return this.httpClient.get("/getCheckoutPrice/"+emailId);
}

removeFromWishList(id:any) {
 // console.log("Inside Remove service  product id is:"+productId+"Inside email id is:"+emailId.email);
  // const url=this.wishListUrl + '/delete/'+productId;
  console.log("WishList product id is:"+id);
   return this.httpClient.delete("/removeFromWishList/" +id);
}

removeFromCart(id:any) {
  // console.log("Inside Remove service  product id is:"+productId+"Inside email id is:"+emailId.email);
   // const url=this.wishListUrl + '/delete/'+productId;
   console.log("Cart product id is:"+id);
    return this.httpClient.delete("/removeFromCart/" +id);
 }

//   getAllInPage(page: number, size: number): Observable<any> {
//     const url = `${this.productUrl}?page=${page}&size=${size}`;
//     return this.httpClient.get(url)
//         .pipe(
//             // tap(_ => console.log(_)),
//         )
// }
// getCategoryInPage(categoryType: number, page: number, size: number): Observable<any> {
//   const url = `${this.categoryUrl}/${categoryType}?page=${page}&size=${size}`;
//   return this.httpClient.get(url);
//       // tap(data => console.log(data))
  
// }


 

  setData(data:any,totalPrice:any,count:any) {
    this.productIdFromBuyNowDetails = data;
    this.totalPriceFromDetails=totalPrice;
    this.productCount=count;
  }

  getData() {
    return this.productIdFromBuyNowDetails;

  }

  getCount(){
    return this.productCount;
  }

  getTotalPrice(){
return this.totalPriceFromDetails;
  }
  addToOrdersDirect(UserDetailsForm:any,email:any,productId:any,totalPrice:any,count:any){
    let args={
      args1:UserDetailsForm.phone,
      args2:UserDetailsForm.address,
      args3:UserDetailsForm.state,
      args4:UserDetailsForm.pincode,
      args5:email,
      args6:productId,
      args7:totalPrice,
      args8:count
     }
 return this.httpClient.post("/addToOrdersDirect",args);
  }

  getAllAdminOrders(){
    return this.httpClient.get("/getAllOrders");
  }

 setProduct(productInfo:any){
  this.editProduct=productInfo;
 }
 getEditProduct(){
  return this.editProduct;
 }
 updateProductDetailsByAdmin(form:any){
 return this.httpClient.put("/updateProductByAdmin",form);
 }
 addProduct(form:any){
  return this.httpClient.post("/addProductByAdmin",form);
 }

 addToRentsDirect(UserDetailsForm:any,email:any,productId:any,totalPrice:any,count:any){
  let args={
    args1:UserDetailsForm.phone,
    args2:UserDetailsForm.address,
    args3:UserDetailsForm.state,
    args4:UserDetailsForm.pincode,
    args5:email,
    args6:productId,
    args7:totalPrice,
    args8:count
    
   }
   console.log("Add to inside rent functionality:");
   console.log(email+productId+totalPrice);
return this.httpClient.post("/addToRentsDirect",args);
}
setCartLength(cartLength:any){
this.cartlength=cartLength;
}

getCartlength(){
  return this.cartlength;
}
}

