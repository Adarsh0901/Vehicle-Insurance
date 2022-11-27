import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  constructor() { }

  public customerCredentials = [{
    customerId: '63626',
    name: 'Ashwini Shukla',
    gender: 'Male',
    email: 'ashwinis@gmail.com',
    address: 'Gajanan Apartment, tulinj road, Nallasopara',
    password: 'Test63626'
  },{
    customerId: '31659',
    name: 'Adarsh Shukla',
    gender: 'Male',
    email: 'adarshs@gmail.com',
    address: 'Sai Sahara Apartment, tulinj road, Nallasopara',
    password: 'Test31659'
  }]
}
