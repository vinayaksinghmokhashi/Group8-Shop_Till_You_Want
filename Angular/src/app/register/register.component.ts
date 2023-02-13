import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser:any;
  user: any;
  phoneNo:any;
  otp:any;
  verificationStatus:any;

  constructor(private service:UserService,private router:Router,private toastr:ToastrService) {
   
    this.user = {id:'',password:'',name:'',phone:'',address:'',active:'true',role:'ROLE_MANAGER',email:''}

  }



  ngOnInit() {


  }

   votp(user_phone:any){
     this.service.generateOTP(user_phone).subscribe((data:any)=>{this.phoneNo =data;console.log(this.phoneNo);});
   
    if(user_phone)
    {
      this.toastr.success("OTP generated successfully!");
    }
    
  }
    v(phone:any,otp:any){
    console.log("Phone no. is;"+phone+"Otp is:"+otp);
     this.service.verifyOTP(phone,otp).subscribe((data:any)=>{this.verificationStatus=data.verificationStatus;console.log(data);});
    console.log("OTP Response");
    console.log(this.verificationStatus);
    if(this.verificationStatus=="approved")
    {
    this.toastr.success("OTP verified successfully!");
    }
  
    
  }

 async onSubmit() {
    
    await this.service.checkDuplicateMail(this.user.email).then((data: any) => {this.newUser = data; console.log(data);});
    if(this.newUser!=null)
    {
      this.toastr.error("Email Id already registered!");
      this.router.navigate(['/login']);
    }
    else{
      if(this.verificationStatus=="approved")
      {
        this.service.registerUser(this.user).subscribe((result: any) => {console.log(result);});
    
        this.toastr.success('You are registered successfully!', 'Success!');
        this.router.navigate(['login']);
      }
  
  
    }
  }

}
