import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgentRegisterComponent } from './agent/agent-register/agent-register.component';
import { CustomerListsComponent } from './agent/customer-lists/customer-lists.component';
import { CustomerDetailComponent } from './agent/customer-detail/customer-detail.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { PolicyListsComponent } from './customer/policy-lists/policy-lists.component';
import { ClaimPolicyComponent } from './customer/claim-policy/claim-policy.component';
import { BuyPolicyComponent } from './customer/buy-policy/buy-policy.component';
import { CheckClaimStatusComponent } from './customer/check-claim-status/check-claim-status.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ClaimedListComponent } from './agent/claimed-list/claimed-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AgentRegisterComponent,
    CustomerListsComponent,
    CustomerDetailComponent,
    CustomerRegisterComponent,
    PolicyListsComponent,
    ClaimPolicyComponent,
    BuyPolicyComponent,
    CheckClaimStatusComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ClaimedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
