import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quota } from '../quota'

@Component({
  selector: 'app-quota-details',
  templateUrl: './quota-details.component.html',
  styleUrls: ['./quota-details.component.css']
})
export class QuotaDetailsComponent implements OnInit {
  
  numberOfLikes : any = 0;

  @Input() quota: Quota;
  @Output() isComplete = new EventEmitter<boolean>();
  constructor() { }


  likeButtonClick(){
    let like = document.getElementById("uvote");
    if (like.innerHTML ==="856" ){
      like.innerHTML = "857";   
    } else {
      like.innerHTML = "856";
    }
  }
 voteButtonClick(){
   let ups = document.getElementById("up");
   if (ups.innerHTML = "0"){
     ups.innerHTML = "1";
   } else {
     ups.innerHTML = "0";
   }
 }
  
  dislikeButtonClick(){
   let downs = document.getElementById("down");
   if (downs.innerHTML ==="0" ){
     downs.innerHTML = "1";
   } else {
     downs.innerHTML = "0";
   }
  }

  quotaDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  ngOnInit(): void {
  }

}
