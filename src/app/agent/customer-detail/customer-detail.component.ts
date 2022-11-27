import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PolicyDetailService } from 'src/app/Services/policy-detail.service';
import { CustomerDetailService } from 'src/app/Services/customer-detail.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute, public policyDetail: PolicyDetailService, public customer: CustomerDetailService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.customerId = params['id']!
    });

    for(let i=0;i<this.customer.customerCredentials.length;i++){
      if(this.customer.customerCredentials[i].customerId == this.customerId){
        this.customerDetails.push(this.customer.customerCredentials[i])
      }
    }

    for(let i = 0; i<this.policyDetail.policyCredentials.length; i++){
      if(this.policyDetail.policyCredentials[i].customerId == this.customerId){
        this.insuranceDetail.push(this.policyDetail.policyCredentials[i])
      }
    }
  }

  customerId = '';
  customerDetails: any[]= []
  insuranceDetail: any[]= []


}
