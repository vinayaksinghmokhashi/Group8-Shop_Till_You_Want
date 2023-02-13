import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-skin-care-products',
  templateUrl: './skin-care-products.component.html',
  styleUrls: ['./skin-care-products.component.css']
})
export class SkinCareProductsComponent implements OnInit {
  skinProducts:any;
constructor(private prodService:ProductService){}
ngOnInit(): void {
  this.prodService.getAllProductsSkinCare().subscribe((data:any)=>{this.skinProducts=data;});
}
viewProduct(prodId:any){
  localStorage.setItem('id',prodId);
//this.detailComp.getProduct(prodId);
}

}
