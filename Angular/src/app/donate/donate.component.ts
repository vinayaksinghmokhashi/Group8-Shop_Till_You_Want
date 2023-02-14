import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
declare var jQuery: any;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  
  donar: any;
  
  mail:any; currentDate :any;

  
  constructor(private service:UserService,private router:Router,private toastr:ToastrService) {
    this.currentDate=new Date().toLocaleDateString();

    this.donar = { dId: "", dName: "", item: "", gender: "", dod: this.currentDate, emailId: "", address: "",imagePath:"" };
  }

  ngOnInit(): void {
    jQuery('#DModal').modal('show');
  }

  registerEmployee() {
    console.log(this.donar);
    this.service.donarRegistration(this.donar).subscribe((result: any) => { console.log(result); });
    this.mail={to:this.donar.emailId,subject:'Donation Successfull',message:'you donated Successfully \n '+'item Type:'+this.donar.item+'\n Our Delivery Agent with name XXX/n  will pick the item/items soon . For any pickup related queries contact 987678xxxx/n  Thanyou for GreatHeart!!! '}
      this.service.sendemail(this.mail).subscribe((data:any)=>{console.log(this.mail)});
       this.toastr.success("Your Donation is successful! Thank You!!");
        this.router.navigate(['/product']);
  }


}
