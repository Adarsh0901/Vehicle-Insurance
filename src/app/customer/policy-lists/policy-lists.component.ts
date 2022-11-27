import { Component, OnInit } from '@angular/core';
import { PolicyDetailService } from 'src/app/Services/policy-detail.service';

@Component({
  selector: 'app-policy-lists',
  templateUrl: './policy-lists.component.html',
  styleUrls: ['./policy-lists.component.scss']
})
export class PolicyListsComponent implements OnInit {

  constructor(public policyDetail: PolicyDetailService) { }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('customerId')!

    this.getPoliciesList()
    
  }

  customerId = ''
  policyList:any = []

  getPoliciesList(){
    if(this.customerId == null){
      this.customerId = ''
    }else{
      for(let i = 0; i<this.policyDetail.policyCredentials.length;i++){
        if(this.policyDetail.policyCredentials[i].customerId == this.customerId){
          this.policyList.push(this.policyDetail.policyCredentials[i])
        }
      }
    }
  }


}
