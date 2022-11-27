import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PolicyDetailService } from 'src/app/Services/policy-detail.service';
import { ClaimDetailService } from 'src/app/Services/claim-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-policy',
  templateUrl: './claim-policy.component.html',
  styleUrls: ['./claim-policy.component.scss']
})
export class ClaimPolicyComponent implements OnInit {

  constructor(public route: ActivatedRoute, public policy: PolicyDetailService, public claimService: ClaimDetailService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.policyNumber = params['id']!
    });

    for(let i=0;i<this.policy.policyCredentials.length;i++){
      if(this.policy.policyCredentials[i].insuranceDetail.policyNumber === this.policyNumber){
        this.policyDetail.push(this.policy.policyCredentials[i])
      }
    }

    this.customerId = localStorage.getItem('customerId')!
  }

  customerId = ''
  claimId= ''
  status ='New'
  policyNumber = ''
  accidentDate = ''
  accidentDetail = ''
  accidentPhoto = ''
  driverName = ''
  driverLicence = ''
  accidentPlace = ''

  policyDetail:any[] = []

  onSubmitHandler(data:NgForm){
    this.claimId = (Math.floor(Math.random()*90000) + 10000).toString()
    var claimData = {
      "customerId": this.customerId,
      "claimId": this.claimId,
      "claimStatus": this.status,
      "policyNumber": this.policyNumber,
      "accidentDate": this.accidentDate,
      "accidentdetail": this.accidentDetail,
      "accidentPlace": this.accidentPlace,
      "accidentPhoto": this.accidentPhoto,
      "driverName": this.driverName,
      "driverLicence":this.driverLicence
    }
    console.log(claimData)
    this.claimService.claimLists.push(claimData)
    alert(`Your Claim Id: ${this.claimId}`)
    this.router.navigate(['/customer/claimed-lists'])

  }

  onSelectedFiles(event:any){
    if(event.target.files[0]){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(e:any)=>{
        this.accidentPhoto = e.target.result;
      }
    }
  }
}
