import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Role } from '../enum/Role';
import { ProductService } from '../product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
   retreivedData:any;
   retreivedRole:any;
   loggedUser:any;
   loggedEmailId:any;
   currentUser:any;
   Role=Role;
   loggedRole:any;
   loginStatus:any;
   loggedUserRole:any;
   userFullDetail:any;
   isAdmin: boolean = false;
  cartLength:any;
  
   
   
  constructor(private userService:UserService,private router:Router,private prodService:ProductService,private authService:SocialAuthService){

  }
ngOnInit(): void {
 
  // this.retreivedData = localStorage.getItem('user');
  // console.log(this.retreivedData)
  // this.loggedUser = JSON.parse(this.retreivedData);
//   this.loggedEmailId = this.loggedUser.emailId;
// this.loginStatus=this.userService.getLoginStatus();
// console.log(this.loginStatus)
this.cartLength=this.prodService.getCartlength();
console.log("The cart length is"+this.cartLength);
 console.log("Data:");
 
this.userService.getLoginStatus().subscribe((data:any)=>{
  this.loginStatus=data;
  this.retreivedData = localStorage.getItem('user');
  this.loggedUser = JSON.parse(this.retreivedData);
  console.log("Logged role for shekhar"+this.loggedUser)
});

 this.userService.getAdminStatus().subscribe((data:any)=>
 {
 this.isAdmin=data;
 });
 console.log("Inside Nav"+this.isAdmin);
}
// currentUserRole()
// {
//   this.retreivedRole = localStorage.getItem('user');
//   this.loggedUserRole = JSON.parse(this.retreivedRole);
//   console.log("Logged role for shekhar"+this.loggedUserRole.role)
//   if(this.loggedUserRole==="ROLE_MANAGER")
//   return true;
//   else
//   return false;
// }
getUser()
{
 
}

getloginStat()
{
  
  this.userService.getLoginStatus().subscribe((data:any)=>{
    this.loginStatus=data;
  });
   
return this.loginStatus;
}

getProductByCategory(prodCat:any){
  
  return this.prodService.getProductsByCategoryType(prodCat);
}

logout(){
  
  // console.log(this.loggedUser);
  this.userService.setUserLoggedOut();
  this.userService.setAdminLoggedOut();
  this.authService.signOut();
  this.router.navigate(['login']);
  localStorage.clear();
 
}


// getDetails(){
//   this.retreivedData = localStorage.getItem('user');
//   // console.log(this.retreivedData)
//   this.loggedUser = JSON.parse(this.retreivedData);
//   this.loggedEmailId = this.loggedUser.emailId;
//   console.log(this.loggedEmailId)
//   this.currentUser=this.loggedEmailId;
//   this.loggedRole=this.loggedUser.Role;
// }

}
