import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerDetailService } from 'src/app/Services/customer-detail.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {

  constructor(public customerDetail: CustomerDetailService) { }

  ngOnInit(): void {
    this.userExist= false
  }

  customerId = ''
  customerName = ''
  customerGender = ''
  customerEmail = ''
  customerAddress = ''
  customerPassword = ''
  userExist = false

  pushData(data:NgForm){
    for(let i=0;i<this.customerDetail.customerCredentials.length;i++){
      if(this.customerEmail == this.customerDetail.customerCredentials[i].email){
        this.userExist = true
      }
    }

    if(!this.userExist){
      this.customerId = (Math.floor(Math.random()*90000) + 10000).toString()
      this.customerPassword = "Test"+this.customerId

      var customerData = {"customerId": this.customerId,"name":this.customerName,"gender":this.customerGender,"email":this.customerEmail,"address":this.customerAddress,"password":this.customerPassword}

      this.customerDetail.customerCredentials.push(customerData)
      alert(`Customer registered successfully Note down customerId and password\ncustomerId: ${this.customerId}\nPassword: ${this.customerPassword}`);
    }
  }

}
