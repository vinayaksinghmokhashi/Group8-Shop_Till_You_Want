import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {
constructor(private prodService:ProductService,private router:Router, private toastr:ToastrService){}
ngOnInit(): void {
 
}
onSubmit(form:any){
  this.prodService.addProduct(form).subscribe((data:any)=>{console.log(data);});
  this.toastr.success("Product added successfully!");
  this.router.navigate(['admin-stocks']);
}
}
