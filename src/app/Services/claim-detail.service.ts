import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimDetailService {

  constructor() { }

  public claimLists = [{
    customerId: '63626',
    claimId: '12345',
    claimStatus: 'New',
    policyNumber: 'NSE123654',
    accidentDate: '12/09/2022',
    accidentdetail: 'Test detail',
    accidentPlace: 'Mumbai',
    accidentPhoto: '',
    driverName: 'John',
    driverLicence:'john2021201'
  }]
}
