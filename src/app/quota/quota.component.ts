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
    new Quota(1, 'Username','Author','The first Quote',new Date(2020,6,15)),
  ]
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
    quota.id = quotaLength +1;
    this.quotas.push(quota)
  }
  ngOnInit(): void {
  }

}
