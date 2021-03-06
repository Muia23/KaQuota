import { Component, OnInit } from '@angular/core';
import { Quota } from '../quota'

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.css']
})
export class QuotaComponent implements OnInit {
  numberOfLikes : any = 0;
  
 likeButtonClick(){
   let like = document.getElementById("uvote");
   if (like.innerHTML ==="856" ){
     like.innerHTML = "857";   
   } else {
     like.innerHTML = "856";
   }
 }
voteButtonClick(){
  let other = document.getElementById("noma");
  if (this.numberOfLikes = "0"){
    this.numberOfLikes = "1";
  } else {
    this.numberOfLikes = "0";
  }
}
 
 dislikeButtonClick(){
  let like = document.getElementById("dvote");
  if (like.innerHTML ==="27" ){
    like.innerHTML = "28";
  } else {
    like.innerHTML = "27";
  }
 }
  
  quotas: Quota[]= [
    new Quota( 1, 'System','Alexander Pope','To err is human, to forgive is devine',new Date(2020,4,15)),
    new Quota( 2, 'Floyd','Elbert Hubbard','Don’t take life too seriously. You’ll never get out of it alive',new Date(2020,2,12)),
    new Quota( 3, 'System','Wilfred Muema','It will end in tears',new Date(2020,6,8)),

  ];

  
  deleteQuota(isComplete, index){
    if(isComplete) {
      let toDelete = confirm( 'Are you sure you want to delete this quote?')

      if (toDelete){
        this.quotas.splice(index,1)
      }
    }
  }
  constructor() { }

  addNewQuota(quota){
    let quotaLength = this.quotas.length;
    quota.id = quotaLength+1;
    quota.time = new Date();
    this.quotas.push(quota)
  }

  ngOnInit(){
  }

}
