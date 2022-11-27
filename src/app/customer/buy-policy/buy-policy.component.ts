import { Component, OnInit } from '@angular/core';
import { PolicyDetailService } from 'src/app/Services/policy-detail.service';
import { CustomerDetailService } from 'src/app/Services/customer-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-policy',
  templateUrl: './buy-policy.component.html',
  styleUrls: ['./buy-policy.component.scss']
})
export class BuyPolicyComponent implements OnInit {

  constructor(public policyDetail: PolicyDetailService, public customerDetail: CustomerDetailService, private route: Router) { }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('customerId')!

    if(this.customerId){
      for(let i=0;i<this.customerDetail.customerCredentials.length;i++){
        if(this.customerId == this.customerDetail.customerCredentials[i].customerId){
          this.ownerName = this.customerDetail.customerCredentials[i].name;
          this.ownerGender = this.customerDetail.customerCredentials[i].gender;
          this.ownerAddress = this.customerDetail.customerCredentials[i].address;
        }
      }
    }
  }

  agentId = ''

  customerId = ''
  ownerName = ''
  ownerGender = ''
  ownerAddress = ''

  policyType = ''
  policyNumber = ''
  policyProvider = ''
  policyPurchaseDate = ''
  policyValidDate = ''
  policyPremiumAmount = ''

  vehicleName = ''
  chassisNumber = ''
  yearOfManufacture = ''
  registrationNumber =''
  registrationPlace = ''
  seatingCapacity = ''
  vehicleManufacturer =''
  vehicleCategory = ''
  vehicleValuation =''

  resetHandler(){
    
    this.agentId = ''
    this.customerId = ''
    this.ownerName = ''
    this.ownerGender = ''
    this.ownerAddress = ''

    this.policyType = ''
    this.policyNumber = ''
    this.policyProvider = ''
    this.policyPurchaseDate = ''
    this.policyValidDate = ''
    this.policyPremiumAmount = ''

    this.vehicleName = ''
    this.chassisNumber = ''
    this.yearOfManufacture = ''
    this.registrationNumber =''
    this.registrationPlace = ''
    this.seatingCapacity = ''
    this.vehicleManufacturer =''
    this.vehicleCategory = ''
    this.vehicleValuation =''
  }

  buyEventHandler(){
    if(this.customerId == null){
      this.customerId = (Math.floor(Math.random()*90000) + 10000).toString()
    }

    this.policyNumber = Math.random().toString(36).substring(1,9);

    this.policyProvider = 'Moto Insurance'
    this.policyPurchaseDate = new Date().toLocaleDateString('pt-PT')

    // Calculating policy premium amount from the vehicle valuation
    var premiumCalculation = Number(this.vehicleValuation) - (Number(this.vehicleValuation) * 40 / 100)
    this.policyPremiumAmount = premiumCalculation.toString()

    // Calculating valid date from purchaseDate
    const validDateCalculation = new Date(new Date().setFullYear(new Date().getFullYear() + 5))
    this.policyValidDate = validDateCalculation.toLocaleDateString('pt-PT')

    var insuranceDetail = {
      "id": Math.floor(Math.random() * 90 + 10),
      "customerId": this.customerId,
      "agentId": this.agentId,
      "insuranceDetail":{
        "policyNumber": this.policyNumber,
        "policyProvider": this.policyProvider,
        "policyType": this.policyType,
        "policyValidPeriod": this.policyValidDate,
        "policyPurchaseDate": this.policyPurchaseDate,
        "policyPremiumAmount": this.policyPremiumAmount
      },
      "vehicleDetail":{
        "vehicleName": this.vehicleName,
        "chassisNumber": this.chassisNumber,
        "yearOfManufacture": this.yearOfManufacture,
        "registrationNumber": this.registrationNumber,
        "registrationPlace": this.registrationPlace,
        "seatingCapacity": this.seatingCapacity,
        "vehicleCategory": this.vehicleCategory,
        "vehicleValuation": this.vehicleValuation,
        "vehicleManufacturer": this.vehicleManufacturer,
      }
    }

    //console.log(insuranceDetail)

    this.policyDetail.policyCredentials.push(insuranceDetail)
    alert(`Your new policy number is: ${this.policyNumber}`)
    this.resetHandler()
    this.route.navigate(['/customer/view-policies'])
  }

}
