import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-fashion-products',
  templateUrl: './fashion-products.component.html',
  styleUrls: ['./fashion-products.component.css']
})
export class FashionProductsComponent implements OnInit {
  fashionProducts:any;
constructor(private prodService:ProductService){}
ngOnInit(): void {
  this.prodService.getAllProductsFashion().subscribe((data:any)=>{this.fashionProducts=data;});
}
viewProduct(prodId:any){
  localStorage.setItem('id',prodId);
//this.detailComp.getProduct(prodId);
}
}
