import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mobile-products',
  templateUrl: './mobile-products.component.html',
  styleUrls: ['./mobile-products.component.css']
})
export class MobileProductsComponent implements OnInit {
  mobileProducts:any;
constructor(private prodService:ProductService){}
ngOnInit(): void {
  this.prodService.getAllProductsMobile().subscribe((data:any)=>{this.mobileProducts=data;});
}
viewProduct(prodId:any){
  localStorage.setItem('id',prodId);
//this.detailComp.getProduct(prodId);
}
}
