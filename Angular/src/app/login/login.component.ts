import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Role } from '../enum/Role';
import { UserService } from '../services/user.service';
import { GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { SocialAuthService } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userFromGoogle: SocialUser = new SocialUser;
  GoogleLoginProvider: any;
  isInvalid: any;
  isLogout: any;
  submitted = false;
  user:any;
  adminEmailId:any;
  adminPassword:any;
  isAdmin: boolean = false;
  mail:any;

  returnUrl = '/';

  constructor(private userService:UserService,private router:Router,private toastr:ToastrService,private authService: SocialAuthService) {
    this.adminEmailId="admin@shoptillyouwant@gmail.com",
this.adminPassword="admin";
 
    

  }

  ngOnInit() {
    // let params = this.route.snapshot.queryParamMap;
    // this.isLogout = params.has('logout');
    // this.returnUrl = params.get('returnUrl');
   // getUserDetails();
//   this.userService.getUserDetail(this.user);
this.authService.authState.subscribe(user => {
  this.userFromGoogle = user;
  console.log("Hello from google"+user.email);
  if(this.userFromGoogle!=null){
    this.toastr.success("Successfully logged in");
    //  this.userService.sendemail()
    this.user = {id:'',password:'',name:this.userFromGoogle.name,phone:'',address:'',active:'true',role:'ROLE_MANAGER',email:this.userFromGoogle.email}
    console.log(this.userFromGoogle.email);
    localStorage.setItem('user',JSON.stringify(this.userFromGoogle));
     this.userService.setUserLoggedIn();
     this.router.navigate(['product']);
   }
});

  }

 async onSubmit(form:any) {
 //console.log(form)

   // this.submitted = true;

  await this.userService.login(form).then((data: any) => {this.user = data; console.log(data);});
console.log("Hi");
    //  await  this.userService.login(form).then((data:any)=> {
       // console.log(data);
      // this.user = data; console.log(data);
    
                // if (user) {
                //   console.log(form.email);
                //     if (user.role != Role.Customer) {

                //         this.returnUrl = '/product';
                //     }

                //     this.router.navigateByUrl(this.returnUrl);
                // } else {
                //     this.isLogout = false;
                //     this.isInvalid = true;
                // }

         //   }
      //  );
       

      if(form.emailId===this.adminEmailId)
      {
        this.isAdmin=true;
        console.log("Admin is login");
        this.userService.setIsAdmin();
      }
      else{
        this.isAdmin=false;
        this.userService.setIsNotAdmin();
      }
    

        if (this.user != null ) {
        // console.log(this.user);
          // console.log(this.employee.password);
          //  alert('Successfully LoggedIn...');
          this.toastr.success("Successfully logged in");
          //  this.userService.sendemail()
          
           localStorage.setItem('user',JSON.stringify(this.user));
           this.userService.setUserLoggedIn();
         //  console.log("Hi User"+localStorage.getItem('user'));
          
          // this.service.setUserLoggedIn();
           if(!this.isAdmin)
           {
      //       this.mail={to:form.emailId,subject:'Login Successfull',message:'you login successfull shop in "shop till you want"'}
      // this.userService.sendemail(this.mail).subscribe((data:any)=>{console.log(this.mail)});

           this.router.navigate(['product']);
           }
           else{
            this.router.navigate(['admin-main'])
           }
         } 
        
         else {
         console.log(this.user);
          //  alert('Invalid Credentials!!!');
          this.toastr.error("Invalid Credentials!!!");
           this.router.navigate(['login']);
         }


  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this.authService.signOut();
  }
  
  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  

}
