import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quota } from '../quota';

@Component({
  selector: 'app-quota-form',
  templateUrl: './quota-form.component.html',
  styleUrls: ['./quota-form.component.css']
})
export class QuotaFormComponent implements OnInit {

  newQuota = new Quota(0,"","");
  @Output() addQuota = new EventEmitter<Quota>();

  submitQuota(){
    this.addQuota.emit(this.newQuota);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
