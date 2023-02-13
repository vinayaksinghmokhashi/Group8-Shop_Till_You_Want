import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit,AfterContentChecked {
  retreivedData:any;
  viewProduct:any;
  addedToWishlist: boolean = false;
  emailId:any;
  retreivedDataUser:any;
  loggedUserEmailId:any;
  count:any
  isClicked:boolean=false;
  days:any;
  loggedStatus: boolean = false;
  
  multiplier: any; 
//   options = [
//     {label: '1', value: '1'},
//     {label: '3', value: '2'},
//     {label: '5', value: '3'},
// ];
  
  constructor(
      private prodService: ProductService,
      private route: ActivatedRoute,
      private router: Router,
      private toastr:ToastrService,
      private userService:UserService) {
  this.count=1;
 this.multiplier = 1; 
 this.days=1;
  }

ngAfterContentChecked(): void {
  this.multiplier=this.days;
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

//   selectedOptionChange(value: string) { 
   
//     if(value==='1')
//     {
//       this.multiplier=1;
//     }
//     else if(value==='2')
//     {
//       this.multiplier=1.2;
//     }
//    else if(value==='3')
//     {
//       this.multiplier=1.3;
//     }

// } 

  // ngAfterContentChecked(): void {
  //   if(this.days==1)
  //   {
  //     this.multiplier=1;
  //   }
  //   else if(this.days==3)
  //   {
  //     this.multiplier=1.2;
  //   }
  //   else if(this.days==5)
  //   {
  //     this.multiplier=1.3;
  //   }
  
    

  // }
  getProduct() {
   
   // this.service.registerUser(this.user).subscribe((result: any) => {console.log(result);});
  }
  // handleAddToWishList( productId:any){
  //   console.log("started");
  //   console.log(productId);
  //   this.count=1;
    
  //   this.prodService.addToWishList(productId,this.loggedUserEmailId).subscribe(() => {
  //     this.addedToWishlist=true;
      
  //   }
    
  //   );
  //   this.toastr.success("Added to Wish List");
  //   console.log(this.addedToWishlist);
  // }
 
// addToCart(productId:any,totalPrice:any,count:any){
// this.prodService.addToCart(productId,this.loggedUserEmailId,totalPrice,count).subscribe((result: any) => {console.log(result);});
// }
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

}
