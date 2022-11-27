import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../Services/customer-detail.service';
import { AgentDetailService } from '../Services/agent-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private customers:CustomerDetailService, private agents:AgentDetailService, private route: Router) { }

  ngOnInit(): void {
    this.getLoginInformation()
  }

  ngDoCheck(): void {
    this.getLoginInformation()
  }

  customerId = ''
  customerName = ''
  agentId = ''
  agentName = ''
  isLogin = false
  isCustomerLogin = false
  isAgentLogin = false

  logoutHandler(){
    localStorage.removeItem('customerId')
    localStorage.removeItem('agentId')
    this.isLogin = false
    this.isCustomerLogin = false
    this.isAgentLogin = false
    this.route.navigate(['/'])
  }

  getLoginInformation(){
    if(localStorage.getItem('customerId') || localStorage.getItem('agentId')){
      this.isLogin = true

      this.customerId = localStorage.getItem('customerId')!
      if(this.customerId !== null){
        this.isCustomerLogin = true
        for(let i=0;i<this.customers.customerCredentials.length;i++){
          if(this.customerId === this.customers.customerCredentials[i].customerId){
            this.customerName = this.customers.customerCredentials[i].name
          }
        }
      }
      
      this.agentId = localStorage.getItem('agentId')!
      if(this.agentId !== null){
        this.isAgentLogin = true
        for(let i=0;i<this.agents.agentCredentials.length;i++){
          if(this.agentId === this.agents.agentCredentials[i].agentId){
            this.agentName = this.agents.agentCredentials[i].name
          }
        }
      }
    }
  }
}
