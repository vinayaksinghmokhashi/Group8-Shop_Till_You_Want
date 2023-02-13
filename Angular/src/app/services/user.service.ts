import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

// import {Subject} from 'rxjs';
// import {CookieService} from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})
export class UserService {
  loginStatus: Subject<any>;
  isUserLogged: boolean;
  isAdmin: Subject<any>;
  isAdminLogged:boolean;
  otpForForgotPassword:any;
  emailForOtp:any;


//    ;
//     public nameTerms = new Subject<string>();
//     public name$ = this.nameTerms.asObservable();
    constructor(private http: HttpClient) {
      this.isUserLogged = false;
      this.loginStatus = new Subject();
      this.isAdmin=new Subject();
      this.isAdminLogged=false;
        // const memo = localStorage.getItem('currentUser');
        

    }
    login(user: any) {
         return this.http.get("/login/" + user.emailId + "/" + user.password).toPromise();
      }
      registerUser(user:any){
        console.log(user.emailId);
        return this.http.post("/registerUser",user);
      }

      getLoginStatus(): any {
        return this.loginStatus.asObservable();
      }
    
      setUserLoggedIn() {
        this.isUserLogged = true;
        this.loginStatus.next(this.isUserLogged);
      }
      setUserLoggedOut() {
        this.isUserLogged = false;
        this.loginStatus.next(this.isUserLogged);
      }

      setAdminLoggedOut() {
        this.isAdminLogged = false;
        this.isAdmin.next(this.isAdminLogged);
      }
     
      getUserLogged() {
        return this.isUserLogged;
      }

      getAdminStatus(): any {
        return this.isAdmin.asObservable();
      }
      
      setIsAdmin(){
        //console.log("Admin in user service"+isAdmin);
        this.isAdminLogged=true;
        this.isAdmin.next(this.isAdminLogged);
      }

      setIsNotAdmin(){
        this.isAdminLogged=false;
        this.isAdmin.next(this.isAdminLogged);
      }
     
      getIsAdmin(){
        return this.isAdminLogged;
      }
  
getAllUsers(){
  return this.http.get("/getAllUsers");
}
sendemail(mail:any){
  return this.http.post('/send-email',mail);
}

checkMailId(form:any){
return this.http.get("/checkMailId/" +form.emailId).toPromise();
}

checkDuplicateMail(email:any){
  return this.http.get("/checkMailId/" +email).toPromise();
  }

setOtp(otp:any,form:any){
  this.otpForForgotPassword=otp;
  this.emailForOtp=form.emailId;
}

getOtp(){
  return this.otpForForgotPassword;
}

getEmailForOtp(){
  return this.emailForOtp;
}

updatePassword(form:any,emailId:any){
  let args={
    args1:form.newPassword,
    args2:emailId
   }
return this.http.put("/updatePassword",args);
}
donarRegistration( donar :any){
  return this.http.post('/DonarRegistration',donar);
}

generateOTP(mobile: any) {
  return this.http.get('/api/phoneNumber/generateOTP/'+ mobile);
}
verifyOTP(mobile: any,OTP:any) {
  return this.http.get('/api/phoneNumber/verifyOTP/'+mobile+"/"+OTP);
}
    }

