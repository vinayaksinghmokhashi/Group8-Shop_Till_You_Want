import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDiscountComponent } from './admin-discount/admin-discount.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import { AdminStocksComponent } from './admin-stocks/admin-stocks.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { CartComponent } from './cart/cart.component';
import { CheckForgotPasswordOtpComponent } from './check-forgot-password-otp/check-forgot-password-otp.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { DeveloperComponent } from './developer/developer.component';
import { DonateComponent } from './donate/donate.component';
import { FashionProductsComponent } from './fashion-products/fashion-products.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeFurnishingProductsComponent } from './home-furnishing-products/home-furnishing-products.component';
import { LoginComponent } from './login/login.component';
import { MobileProductsComponent } from './mobile-products/mobile-products.component';
import { MojoauthAppComponent } from './mojoauth-app/mojoauth-app.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { OrderDetailsDuplicateComponent } from './order-details-duplicate/order-details-duplicate.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { RentOrderDetailsComponent } from './rent-order-details/rent-order-details.component';
import { RentOrdersComponent } from './rent-orders/rent-orders.component';
import { SkinCareProductsComponent } from './skin-care-products/skin-care-products.component';
import { WishListComponent } from './wish-list/wish-list.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'product',component:ProductsComponent},
  {path: 'mobile', component: MobileProductsComponent},
  {path:'skincare',component:SkinCareProductsComponent},
  {path:'homefurnishing',component:HomeFurnishingProductsComponent},
  {path:'fashion',component:FashionProductsComponent},
  {path:'details',component:DetailComponent},
  {path:'wishList',component:WishListComponent},
  {path:'orders',component:OrderComponent},
  {path:'order-details',component:OrderDetailsComponent},
  {path:'order-details-duplicate',component:OrderDetailsDuplicateComponent},
  {path:'admin-main',component:AdminMainComponent},
  {path:'admin-user',component:AdminUsersComponent},
  {path:'admin-sales',component:AdminSalesComponent},
  {path:'admin-stocks',component:AdminStocksComponent},
  {path:'admin-product-edit',component:AdminProductEditComponent},
  {path:'admin-product-add',component:AdminProductAddComponent},
  {path:'admin-discount',component:AdminDiscountComponent},
  {path:'mojo-app',component:MojoauthAppComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'forgot-password-otp',component:CheckForgotPasswordOtpComponent},
  {path:'new-password',component:NewPasswordComponent},
  {path:'rent-details',component:RentDetailsComponent},
  {path:'rent-orders',component:RentOrdersComponent},
  {path:'rent-order-details',component:RentOrderDetailsComponent},
  {path:'donate',component:DonateComponent},
  {path:'footer',component:FooterComponent},
  {path:'contact',component:ContactComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'developer',component:DeveloperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
