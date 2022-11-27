import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentRegisterComponent } from './agent-register/agent-register.component';
import { CustomerListsComponent } from './customer-lists/customer-lists.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { FormsModule } from '@angular/forms';
import { ClaimedListComponent } from './claimed-list/claimed-list.component';

const routes : Routes = [
  {
      path: 'register',
      component: AgentRegisterComponent
  },
  {
    path: 'customer-lists',
    component: CustomerListsComponent
  },
  {
    path: 'customer-detail/:id',
    component: CustomerDetailComponent
  },
  {
    path: 'claimed-lists',
    component: ClaimedListComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AgentModule { }
