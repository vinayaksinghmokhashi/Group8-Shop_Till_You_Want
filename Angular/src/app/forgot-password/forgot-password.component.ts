import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotUser:any;
  mail:any;
  otp:any;
constructor(private userService:UserService,private router:Router,private toastr:ToastrService){}
ngOnInit(): void {
  
}
async onSubmit(form:any){
await this.userService.checkMailId(form).then((data: any) => {this.forgotUser = data; console.log(data);});
if(this.forgotUser!=null)
{
  var val = Math.floor(1000 + Math.random() * 9000);
  console.log(val);
  this.otp=val;
  this.mail={to:form.emailId,subject:'Reset Your Password',message:'Please use this otp to reset your password. Use Otp:' + val}
  this.userService.sendemail(this.mail).subscribe((data:any)=>{console.log(this.mail)});
   this.userService.setOtp(this.otp,form);
   this.router.navigate(['/forgot-password-otp']);
}
else{
  this.toastr.error("User Does not exist");
}
}

}
