import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../Services/customer-detail.service';
import { AgentDetailService } from '../Services/agent-detail.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private customerDetail: CustomerDetailService, private agentDetail: AgentDetailService, private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('agentId') || localStorage.getItem('customerId')){
      this.isLogin = true
    }
  }

  id=''
  password=''
  isLogin = false
  flag = false

  onResetHandler(data:NgForm){
    this.id= '';
    this.password='';
  }

  onSubmitHandler(data:NgForm){
    if(this.isLogin){
      alert("You are already logged in")
    }else{
      for(let i = 0; i<this.customerDetail.customerCredentials.length;i++){
        if(this.id == this.customerDetail.customerCredentials[i].customerId && this.password == this.customerDetail.customerCredentials[i].password){
          alert(`Login SuccessFul customer ID: ${this.id}`)
          localStorage.setItem('customerId', String(this.id));
          this.route.navigate(['/'])
          this.isLogin = true
          this.flag = true
        }
      }
      for(let i=0;i<this.agentDetail.agentCredentials.length;i++){
        if(this.id===this.agentDetail.agentCredentials[i].agentId && this.password === this.agentDetail.agentCredentials[i].password){
          localStorage.setItem('agentId',String(this.id))
          alert(`Login successfull Agent id: ${this.id}`)
          this.route.navigate(['/'])
          this.isLogin = true
          this.flag = true
        }
      }

      if(!this.flag){
        alert("Enter Valid credentials, user does not exist")
        this.onResetHandler(data)
      }
    }
  }

}
