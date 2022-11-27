import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { BuyPolicyComponent } from './buy-policy/buy-policy.component';
import { PolicyListsComponent } from './policy-lists/policy-lists.component';
import { ClaimPolicyComponent } from './claim-policy/claim-policy.component';
import { CheckClaimStatusComponent } from './check-claim-status/check-claim-status.component';

const routes : Routes = [
  {
      path: 'register',
      component: CustomerRegisterComponent
  },
  {
    path: 'buy-policy',
    component: BuyPolicyComponent
  },
  {
    path: 'view-policies',
    component: PolicyListsComponent
  },
  {
    path: 'claim-policy/:id',
    component: ClaimPolicyComponent
  },
  {
    path: 'claimed-lists',
    component: CheckClaimStatusComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CustomerModule { }
