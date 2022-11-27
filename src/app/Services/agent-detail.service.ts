import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentDetailService {

  constructor() { }

  public agentCredentials= [{
    agentId: '10792',
    name: 'Sashi Shelke',
    mobileNumber: '9898787860',
    email: 'sashis@motoinsurance.co',
    address: 'Yashwant Heights, Achole road, Vasai',
    password: 'Test10792'
  }]
}
