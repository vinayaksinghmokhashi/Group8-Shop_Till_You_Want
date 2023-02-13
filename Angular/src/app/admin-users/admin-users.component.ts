import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users:any;
constructor(private userService:UserService){}
ngOnInit():void{
  this.userService.getAllUsers().subscribe((result:any)=> {this.users=result;});
  // this.service.getAllCountries().subscribe((data: any) => {this.countries = data;});
}
}
