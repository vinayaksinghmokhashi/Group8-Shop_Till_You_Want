import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home-furnishing-products',
  templateUrl: './home-furnishing-products.component.html',
  styleUrls: ['./home-furnishing-products.component.css']
})
export class HomeFurnishingProductsComponent implements OnInit {
  homeFurnishingproducts:any;
constructor(private prodService:ProductService){}
ngOnInit(): void {
  this.prodService.getAllProductsHomeFurnishing().subscribe((data:any)=>{this.homeFurnishingproducts=data;});
}
viewProduct(prodId:any){
  localStorage.setItem('id',prodId);
//this.detailComp.getProduct(prodId);
}
}
