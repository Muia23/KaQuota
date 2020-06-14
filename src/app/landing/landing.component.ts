import { Component, OnInit } from '@angular/core';
import { Quota } from '../quota'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  quotas: Quota[]= [
    new Quota(1, 'Username','The first Quote'),
    new Quota(2, 'Username', 'The second Quote')
  ]
  addNewQuota(quota){
    let quotaLength = this.quotas.length;
    quota.id = quotaLength +1;
    this.quotas.push(quota)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
