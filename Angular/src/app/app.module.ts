import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { MobileProductsComponent } from './mobile-products/mobile-products.component';
import { SkinCareProductsComponent } from './skin-care-products/skin-care-products.component';
import { HomeFurnishingProductsComponent } from './home-furnishing-products/home-furnishing-products.component';
import { FashionProductsComponent } from './fashion-products/fashion-products.component';
import { DetailComponent } from './detail/detail.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsDuplicateComponent } from './order-details-duplicate/order-details-duplicate.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import { AdminStocksComponent } from './admin-stocks/admin-stocks.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminDiscountComponent } from './admin-discount/admin-discount.component';
import { ToastrModule } from 'ngx-toastr';
import { MojoauthAppComponent } from './mojoauth-app/mojoauth-app.component';
import { SocialLoginModule,SocialAuthServiceConfig } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckForgotPasswordOtpComponent } from './check-forgot-password-otp/check-forgot-password-otp.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { RentOrdersComponent } from './rent-orders/rent-orders.component';
import { RentOrderDetailsComponent } from './rent-order-details/rent-order-details.component';
import { DonateComponent } from './donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeveloperComponent } from './developer/developer.component';
import { DelieveyDatePipe } from './delievey-date.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProductsComponent,
    MobileProductsComponent,
    SkinCareProductsComponent,
    HomeFurnishingProductsComponent,
    FashionProductsComponent,
    DetailComponent,
    WishListComponent,
    OrderComponent,
    OrderDetailsComponent,
    OrderDetailsDuplicateComponent,
    AdminMainComponent,
    AdminUsersComponent,
    AdminSalesComponent,
    AdminStocksComponent,
    AdminProductEditComponent,
    AdminProductAddComponent,
    AdminDiscountComponent,
    MojoauthAppComponent,
    ForgotPasswordComponent,
    CheckForgotPasswordOtpComponent,
    NewPasswordComponent,
    RentDetailsComponent,
    RentOrdersComponent,
    RentOrderDetailsComponent,
    DonateComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    DeveloperComponent,
    DelieveyDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SocialLoginModule
    
  ],
 
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('167363465362-15uovkj92leduh5hmpr177end551s8du.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
