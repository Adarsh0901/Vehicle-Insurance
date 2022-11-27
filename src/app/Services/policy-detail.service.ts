import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyDetailService {

  constructor() { }

  public policyCredentials = [{
    id: 1,
    customerId: '31659',
    agentId: '10792',
    insuranceDetail:{
      policyNumber: "ABC123654",
      policyProvider: "Moto Insurance company",
      policyType: "Third party",
      policyValidPeriod: "20/08/2026",
      policyPurchaseDate: "20/08/2021",
      policyPremiumAmount: "800000"
    },
    vehicleDetail:{
      vehicleName: "XUV 300",
      chassisNumber: '',
      yearOfManufacture: '2020',
      registrationNumber: "MH15HM7013",
      registrationPlace: 'Nashik',
      seatingCapacity: '5',
      vehicleCategory: "Luxury",
      vehicleValuation: '1359000',
      vehicleManufacturer: "Mahindra",
    }
  },{
    id: 2,
    customerId: '31659',
    agentId: '10792',
    insuranceDetail:{
      policyNumber: "BSX123654",
      policyProvider: "Moto Insurance company",
      policyType: "Zero Depreciation",
      policyValidPeriod: "12/12/2024",
      policyPurchaseDate: "12/12/2019",
      policyPremiumAmount: "1200000"
    },
    vehicleDetail:{
      vehicleName: "Tata truck",
      chassisNumber: '',
      yearOfManufacture: '2020',
      registrationNumber: "MH15HH7013",
      registrationPlace: 'Nashik',
      seatingCapacity: '2',
      vehicleCategory: "Commercial",
      vehicleValuation: '1859000',
      vehicleManufacturer: "Tata",
    }
  },{
    id: 3,
    customerId: '63626',
    agentId: '10792',
    insuranceDetail:{
      policyNumber: "NSE123654",
      policyProvider: "Moto Insurance company",
      policyType: "Zero Depreciation",
      policyValidPeriod: "12/12/2024",
      policyPurchaseDate: "12/12/2019",
      policyPremiumAmount: "1200000"
    },
    vehicleDetail:{
      vehicleName: "Tata truck",
      chassisNumber: '',
      yearOfManufacture: '2020',
      registrationNumber: "MH15HH7013",
      registrationPlace: 'Nashik',
      seatingCapacity: '2',
      vehicleCategory: "Commercial",
      vehicleValuation: '2059000',
      vehicleManufacturer: "Tata",
    }
  }]
}
