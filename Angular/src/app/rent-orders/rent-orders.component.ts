import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-rent-orders',
  templateUrl: './rent-orders.component.html',
  styleUrls: ['./rent-orders.component.css']
})
export class RentOrdersComponent implements OnInit {
  retreivedDataUser:any;
  loggedUser:any;
  rentProducts:any;
constructor(private prodService:ProductService,private router:Router){
  // window.location.reload();
}
ngOnInit(): void {
  this.retreivedDataUser = localStorage.getItem('user');
  this.loggedUser=JSON.parse(this.retreivedDataUser);
  this.prodService.getAllRents(this.loggedUser.email).subscribe((data: any) => { this.rentProducts = data; });
  this.router.navigate(['/orders']);
}

}
