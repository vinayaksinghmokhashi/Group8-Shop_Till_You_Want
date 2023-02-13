import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryType } from '../enum/CategoryType';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit{
  product:any;
  editProduct:any;
  CategoryType=CategoryType;
constructor(private prodService:ProductService,private router:Router,private toastr:ToastrService){

}
ngOnInit(): void {
  this.editProduct=this.prodService.getEditProduct();
  
}
onSubmit(form:any){
  console.log("Form is:"+form);
 this.prodService.updateProductDetailsByAdmin(form).subscribe((result:any)=>{console.log(result);});
this.toastr.success("Product update successfully!");
 this.router.navigate(['admin-stocks']);
}
}
