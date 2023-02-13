import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.css']
})
export class AdminSalesComponent implements OnInit {
  orders:any;
constructor(private prodService:ProductService){}
ngOnInit(): void {
  this.prodService.getAllAdminOrders().subscribe((result:any)=> {this.orders=result;});
}
}
