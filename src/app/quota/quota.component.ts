import { Component, OnInit } from '@angular/core';
import { Quota } from '../quota'

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.css']
})
export class QuotaComponent implements OnInit {

  quotas: Quota[]= [
    new Quota(1, 'Alexander Pope','To err is human, to forgive is devine'),
  ]
  constructor() { }

  addNewQuota(quota){
    let quotaLength = this.quotas.length;
    quota.id = quotaLength +1;
    this.quotas.push(quota)
  }
  ngOnInit(): void {
  }

}
