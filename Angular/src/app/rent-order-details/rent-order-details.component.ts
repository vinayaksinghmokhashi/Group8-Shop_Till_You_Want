import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rent-order-details',
  templateUrl: './rent-order-details.component.html',
  styleUrls: ['./rent-order-details.component.css']
})
export class RentOrderDetailsComponent implements OnInit{
  retreivedDataUser:any;
  loggedUser:any;
  userDetails:any;
  productIdFromService:any;
  totalPriceFromService:any;
  productCount:any;
  mail:any;
constructor(private prodService:ProductService,private router:Router,private toastr:ToastrService, private userService:UserService){

  
}
ngOnInit(): void {
  this.retreivedDataUser = localStorage.getItem('user');
  this.loggedUser=JSON.parse(this.retreivedDataUser);
 this.productIdFromService=this.prodService.getData();
 this.totalPriceFromService=this.prodService.getTotalPrice();
 console.log("Hello this is product id from service:"+this.productIdFromService)
}



submitForm(UserDetailsForm:any){
  console.log(UserDetailsForm);
 this.productCount=this.prodService.getCount();
 this.prodService.addToRentsDirect(UserDetailsForm,this.loggedUser.email,this.productIdFromService,this.totalPriceFromService,this.productCount).subscribe((result: any) => {console.log(result)});
 this.router.navigate(['/orders']);
 this.toastr.success("Order for Rent placed successfully");
 this.mail={to:this.loggedUser.email,subject:'Order for Rent Placed Successfully',message:'Dear '  + this.loggedUser.name 

 + '  Thank you for your recent order. We are pleased to confirm that your order for rent has been successfully placed. ' 
   
 + ' We will send you an email once your order has been shipped. ' 
   
 +  ' If you have any questions, please don’t hesitate to contact us. ' 
   
 + ' Thank you again for your order. '
   
 + ' Sincerely, ' 
 +  'Shop Till You Want' }
 
this.userService.sendemail(this.mail).subscribe((data:any)=>{console.log(this.mail)});



}

}
