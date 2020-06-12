import { Component, OnInit } from '@angular/core';
import { Quota } from '../quota'

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.css']
})
export class QuotaComponent implements OnInit {

  quotas: Quota[]= [
    {id:1, name:'Username', description:'The first Quote'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
