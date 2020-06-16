import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quota } from '../quota'

@Component({
  selector: 'app-quota-details',
  templateUrl: './quota-details.component.html',
  styleUrls: ['./quota-details.component.css']
})
export class QuotaDetailsComponent implements OnInit {
  

  @Input() quota: Quota;
  @Output() isComplete = new EventEmitter<boolean>();
  
  numberOfLikes :number = 0;

  constructor() { }


  likeButtonClick(){
    this.numberOfLikes++;
  }
  
  dislikeButtonClick(){
    this.numberOfLikes--;
  }

  quotaDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  ngOnInit(): void {
  }

}
