import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailComponent } from '../detail/detail.component';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements  OnInit {
  title:any;
  products:any;
  page: any;
  private paramSub: Subscription = new Subscription;
  private querySub: Subscription = new Subscription;

constructor(private productService:ProductService,private route:ActivatedRoute){
  this.title="Buy something that you want"
}
ngOnInit(): void {
  this.productService.getAllProducts().subscribe((data: any) => { this.products = data; });
  
 
  //console.log(this.products.productId);

  // this.querySub = this.route.queryParams.subscribe(() => {
  //   this.update();
  // });
  // this.paramSub = this.route.params.subscribe(() => {
  //   this.update();
  // });
}
viewProduct(prodId:any){
  localStorage.setItem('id',prodId);
//this.detailComp.getProduct(prodId);
}
// update() {
//   if (this.route.snapshot.queryParamMap.get('page')) {
//     const currentPage = +this.route.snapshot.queryParamMap.get('page');
//     const size = +this.route.snapshot.queryParamMap.get('size');
//     this.getProds(currentPage, size);
//   } else {
//     this.getProds();
//   }
// }
// getProds(page: number = 1, size: number = 3) {
//   if (this.route.snapshot.url.length == 1) {
//     this.productService.getAllInPage(+page, +size)
//       .subscribe(page => {
//         this.page = page;
//         this.title = 'Buy something that you want!';
//       });
//   } else { //  /category/:id
//     const type = this.route.snapshot.url[1].path;
//     this.productService.getCategoryInPage(+type, page, size)
//       .subscribe(categoryPage => {
//         this.title = categoryPage.category;
//         this.page = categoryPage.page;
//       });
//   }

// }
}
