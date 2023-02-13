import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryType } from '../enum/CategoryType';
import { ProductStatus } from '../enum/ProductStatus';
import { MobileProductsComponent } from '../mobile-products/mobile-products.component';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-admin-stocks',
  templateUrl: './admin-stocks.component.html',
  styleUrls: ['./admin-stocks.component.css']
})
export class AdminStocksComponent implements OnInit{
  stocks:any;
  type:any;
  CategoryType = CategoryType;
  ProductStatus=ProductStatus;


constructor(private prodService:ProductService,private router:Router){
// this.type={0:"Mobile",1:"Skin Care",2:"Home Furnishings",3:"Fashion"};



}
ngOnInit(): void {
  this.prodService.getAllProducts().subscribe((data:any)=>{this.stocks=data;});
  this.router.navigate(['admin-stocks']);
}
editProduct(productInfo:any){
this.prodService.setProduct(productInfo);
this.router.navigate(['admin-product-edit']);
}
addProductByAdmin(){
  this.router.navigate(['admin-product-add']);
 
}
}
