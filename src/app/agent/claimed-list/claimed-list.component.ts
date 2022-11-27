import { Component, OnInit } from '@angular/core';
import { ClaimDetailService } from 'src/app/Services/claim-detail.service';

@Component({
  selector: 'app-claimed-list',
  templateUrl: './claimed-list.component.html',
  styleUrls: ['./claimed-list.component.scss']
})
export class ClaimedListComponent implements OnInit {

  constructor(private claimPolicy: ClaimDetailService) { }

  ngOnInit(): void {
    for(let i=0;i<this.claimPolicy.claimLists.length;i++){
      this.claimList.push(this.claimPolicy.claimLists[i])
    }
  }

  claimList:any[] = []

  onApproveHandler(id:any){
    for(let i=0;i<this.claimPolicy.claimLists.length;i++){
      if(this.claimPolicy.claimLists[i].claimId === id){
        this.claimPolicy.claimLists[i].claimStatus = 'Approved'
      }
    }
  }

  onDeniedHandler(id:any){
    for(let i=0;i<this.claimPolicy.claimLists.length;i++){
      if(this.claimPolicy.claimLists[i].claimId === id){
        this.claimPolicy.claimLists[i].claimStatus = 'Denied'
      }
    }
  }

}
