import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-check-forgot-password-otp',
  templateUrl: './check-forgot-password-otp.component.html',
  styleUrls: ['./check-forgot-password-otp.component.css']
})
export class CheckForgotPasswordOtpComponent implements OnInit {
  getOtpFromMail:any;
  
constructor(private userService:UserService,private router:Router,private toastr:ToastrService){}
ngOnInit(): void {
 this.getOtpFromMail= this.userService.getOtp();
 
}
onSubmit(otp:any){
if(this.getOtpFromMail===otp.otp)
{
this.router.navigate(['/new-password']);
}
else{
this.toastr.error("Invalid Otp");
}
}
}
