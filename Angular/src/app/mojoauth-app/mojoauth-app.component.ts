import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import MojoAuth from "mojoauth-web-sdk";

@Component({
  selector: 'app-mojoauth-app',
  templateUrl: './mojoauth-app.component.html',
  styleUrls: ['./mojoauth-app.component.css']
})
export class MojoauthAppComponent implements OnInit {
 
  data:any;
  constructor(private userService:UserService,private router:Router,private toastr: ToastrService, private httpClient: HttpClient, ) {
  }
 ngOnInit(): void {
  const mojoauth = new MojoAuth("bc4b8f0f-a821-4110-b130-bc24e168a2bd", {
    source: [{ type: "email", feature: "otp" },
    { type: "phone", feature: "otp" }],
    language: "english",
    redirect_url: "http://localhost:4200",
  });
  mojoauth.signIn().then((response:any) => {
      this.data=JSON.stringify(response, null, 4)
      this.router.navigate(['product']);
    this.userService.setUserLoggedIn();
      console.log(response)
      });
 }

}


