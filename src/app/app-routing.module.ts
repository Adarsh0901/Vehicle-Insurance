import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path:'contactus',
    component:ContactUsComponent
  },
  {
    path: 'agent',
    loadChildren: ()=>import('./agent/agent.module').then(m =>m.AgentModule)
  },
  {
    path: 'customer',
    loadChildren: ()=>import('./customer/customer.module').then(m =>m.CustomerModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
