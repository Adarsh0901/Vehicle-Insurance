import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgentDetailService } from 'src/app/Services/agent-detail.service';

@Component({
  selector: 'app-agent-register',
  templateUrl: './agent-register.component.html',
  styleUrls: ['./agent-register.component.scss']
})
export class AgentRegisterComponent implements OnInit {

  constructor(public agentDetail: AgentDetailService) { }

  ngOnInit(): void {
    this.userExist= false
  }
  agentId = ''
  agentName = '';
  agentMobileNumber = ''
  agentEmailId = ''
  agentAddress = ''
  agentPassword = ''
  userExist = false

  onResetHandler(data:NgForm){
    this.agentName = '';
    this.agentEmailId = ''
    this.agentAddress = ''
    this.agentMobileNumber = ''
  }

  onSubmitHandler(data:NgForm){
    for(let i=0;i<this.agentDetail.agentCredentials.length;i++){
      if(this.agentEmailId === this.agentDetail.agentCredentials[i].email){
        this.userExist = true
        alert(`Agent already registered with agentId: ${this.agentDetail.agentCredentials[i].agentId}`)
      }
    }
    if(!this.userExist){
      this.agentId = (Math.floor(Math.random()*90000) + 10000).toString()
      this.agentPassword = "Test"+this.agentId

      var agentData = {"agentId": this.agentId,"name":this.agentName,"mobileNumber":this.agentMobileNumber,"email":this.agentEmailId,"address":this.agentAddress,"password":this.agentPassword}

      this.agentDetail.agentCredentials.push(agentData)
      alert(`Agent registered successfully Note down agentId and password\n AgentId: ${this.agentId}\n Password: ${this.agentPassword}`);
    }
  }

}
