import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
declare var jQuery:  any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit,AfterContentChecked{
  cartProducts:any;
  retreivedDataUser:any;
  loggedUser:any;
  count:any;
  totalCartValue:any;
  cartLength:any;
constructor(private prodService:ProductService){
this.count=1;
}
ngOnInit(): void {
  this.retreivedDataUser = localStorage.getItem('user');
  this.loggedUser=JSON.parse(this.retreivedDataUser);
  this.prodService.getAllCartProducts(this.loggedUser.email).subscribe((data: any) => { this.cartProducts = data; });
  this.cartLength=this.cartProducts.length;
  console.log("Inside cart component:"+Object.keys(this.cartLength));
  this.prodService.getCheckoutAmount(this.loggedUser.email).subscribe((data:any)=>{this.totalCartValue=data;});
  this.prodService.setCartLength(this.cartLength);
}

ngAfterContentChecked(): void {
  this.prodService.getCheckoutAmount(this.loggedUser.email).subscribe((data:any)=>{this.totalCartValue=data;});
}

handleRemoveFromCart(id:any){
  this.prodService.removeFromCart(id).subscribe((result: any) => {console.log(result)});
  
  const i = this.cartProducts.findIndex((element: any) => {
    return id === element.id;
  });
  this.cartProducts.splice(i, 1);
  }

 checkout(){
  jQuery('#exampleModal').modal('show');
 }

 
}
