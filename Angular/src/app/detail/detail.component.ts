import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  retreivedData:any;
  viewProduct:any;
  addedToWishlist: boolean = false;
  emailId:any;
  retreivedDataUser:any;
  loggedUserEmailId:any;
  count:any
  isClicked:boolean=false;
  loggedStatus: boolean = false;
  
  constructor(
      private prodService: ProductService,
      private route: ActivatedRoute,
      private router: Router,
      private toastr:ToastrService,
      private userService:UserService) {
  this.count=1;
 
  }

  ngOnInit() {
    
    this.retreivedData = localStorage.getItem('id');
     console.log("Inside detail component with product Id:"+this.retreivedData);
   // const id = this.route.snapshot.paramMap.get('id');
    this.prodService.getDetail(this.retreivedData).subscribe((result:any)=>
  {  this.viewProduct=result}
    );
    this.retreivedDataUser = localStorage.getItem('user');
   this.loggedUserEmailId=JSON.parse(this.retreivedDataUser);

 
    console.log("Email id for user is:"+this.loggedUserEmailId.email);
  }

  getProduct() {
   
   // this.service.registerUser(this.user).subscribe((result: any) => {console.log(result);});
  }
  handleAddToWishList( productId:any){
    this.loggedStatus=this.userService.getUserLogged();
    if(!this.loggedStatus){
    this.router.navigate(['/login']);
    this.toastr.error("Please login to continue");
    }
    else{
    console.log("started");
    console.log(productId);
    this.count=1;
    
    this.prodService.addToWishList(productId,this.loggedUserEmailId).subscribe(() => {
      this.addedToWishlist=true;
      
    }
    
    );
    this.toastr.success("Added to Wish List");
    console.log(this.addedToWishlist);
  }
  }
 
addToCart(productId:any,totalPrice:any,count:any){
  this.loggedStatus=this.userService.getUserLogged();
    if(!this.loggedStatus){
    this.router.navigate(['/login']);
    this.toastr.error("Please login to continue");
    }
    else{
this.prodService.addToCart(productId,this.loggedUserEmailId,totalPrice,count).subscribe((result: any) => {console.log(result);});
this.toastr.success("Cart added successfully");
    }
}
buyNow(productId:any,totalPrice:any,count:any){
  this.loggedStatus=this.userService.getUserLogged();
    if(!this.loggedStatus){
    this.router.navigate(['/login']);
    this.toastr.error("Please login to continue");
    }
    else{
this.prodService.setData(productId,totalPrice,count);
    }
}

  // handleRemoveFromWishList( productId:any){
  //   console.log("Remove product id is:"+productId);
  //   this.prodService.removeFromWishList(productId).subscribe(() => {
  //     this.addedToWishlist=false;
  //   });}
  
}
