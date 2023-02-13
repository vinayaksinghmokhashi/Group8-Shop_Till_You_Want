import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  retreivedDataUser:any;
  loggedUser:any;
  orderProducts:any;
constructor(private prodService:ProductService,private router:Router){
  // window.location.reload();
}
ngOnInit(): void {
  this.retreivedDataUser = localStorage.getItem('user');
  this.loggedUser=JSON.parse(this.retreivedDataUser);
  this.prodService.getAllOrders(this.loggedUser.email).subscribe((data: any) => { this.orderProducts = data; });
  this.router.navigate(['/orders']);
}
}
