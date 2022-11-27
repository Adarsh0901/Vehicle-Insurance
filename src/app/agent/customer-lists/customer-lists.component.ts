import { Component, OnInit } from '@angular/core';
import { PolicyDetailService } from 'src/app/Services/policy-detail.service';

@Component({
  selector: 'app-customer-lists',
  templateUrl: './customer-lists.component.html',
  styleUrls: ['./customer-lists.component.scss']
})
export class CustomerListsComponent implements OnInit {

  constructor(public policyDetail: PolicyDetailService) { }

  ngOnInit(): void {
    this.agentId = localStorage.getItem('agentId')!

    for(let i=0;i<this.policyDetail.policyCredentials.length;i++){
      if(this.agentId === this.policyDetail.policyCredentials[i].agentId){
        this.customerLists.push(this.policyDetail.policyCredentials[i])
      }
    }
  }
  agentId = ''
  customerLists:any[] = []

}
