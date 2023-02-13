import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit{
  getEmailForOtp:any;
constructor(private userService:UserService,private toastr:ToastrService,private router:Router){}
ngOnInit(): void {
  this.getEmailForOtp=this.userService.getEmailForOtp();
}
onSubmit(form:any){
this.userService.updatePassword(form,this.getEmailForOtp).subscribe((result:any)=>{console.log(result);});

this.toastr.success("Password Updated Successfully");
this.router.navigate(["/login"]);
}
}
