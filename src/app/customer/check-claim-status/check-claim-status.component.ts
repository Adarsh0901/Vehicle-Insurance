import { Component, OnInit } from '@angular/core';
import { ClaimDetailService } from 'src/app/Services/claim-detail.service';

@Component({
  selector: 'app-check-claim-status',
  templateUrl: './check-claim-status.component.html',
  styleUrls: ['./check-claim-status.component.scss']
})
export class CheckClaimStatusComponent implements OnInit {

  constructor(public claimPolicy:ClaimDetailService) { }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('customerId')!

    if(this.customerId){
      for(let i=0;i<this.claimPolicy.claimLists.length;i++){
        if(this.claimPolicy.claimLists[i].customerId === this.customerId){
          this.claimList.push(this.claimPolicy.claimLists[i])
        }
      }
    }
  }

  customerId = ''

  claimList:any[] = []

}
