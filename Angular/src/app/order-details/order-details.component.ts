import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent  implements OnInit{
  retreivedDataUser:any;
  loggedUser:any;
  userDetails:any;
  mail:any;
constructor(private prodService:ProductService,private router:Router,private toastr:ToastrService,private userService:UserService){}
ngOnInit(): void {
  this.retreivedDataUser = localStorage.getItem('user');
  this.loggedUser=JSON.parse(this.retreivedDataUser);

}
submitForm(UserDetailsForm:any){
 this.prodService.addToOrders(UserDetailsForm,this.loggedUser.email).subscribe((result: any) => {console.log(result)});
 this.router.navigate(['/orders']);

 this.toastr.success("Order Placed Successfully");
  //       this.mail={to:form.emailId,subject:'Login Successfull',message:'you login successfull shop in "shop till you want"'}
      
      this.mail={to:this.loggedUser.email,subject:'Order Placed Successfully',message:'Dear '  + this.loggedUser.name 

    + '  Thank you for your recent order. We are pleased to confirm that your order has been successfully placed. ' 
      
    + ' We will send you an email once your order has been shipped. ' 
      
    +  ' If you have any questions, please don’t hesitate to contact us. ' 
      
    + ' Thank you again for your order. '
      
    + ' Sincerely, ' 
    +  'Shop Till You Want' }
    
this.userService.sendemail(this.mail).subscribe((data:any)=>{console.log(this.mail)});

} 


}
