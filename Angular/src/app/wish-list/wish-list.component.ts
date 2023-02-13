import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent  implements OnInit{
  wishListProducts:any;
  retreivedDataUser:any;
  loggedUser:any;

constructor(private productService:ProductService){

}

ngOnInit(): void {
  this.retreivedDataUser = localStorage.getItem('user');
  this.loggedUser=JSON.parse(this.retreivedDataUser);
  this.productService.getAllWishListProducts(this.loggedUser.email).subscribe((data: any) => { this.wishListProducts = data; });
}
handleRemoveFromWishList(id:any){
this.productService.removeFromWishList(id).subscribe((result: any) => {console.log(result)});

const i = this.wishListProducts.findIndex((element: any) => {
  return id === element.id;
});
this.wishListProducts.splice(i, 1);
}
}
