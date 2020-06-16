import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css']
})
export class FamousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  likeClick() {
  let a = document.getElementById("number1");
  let b = document.getElementById("number2");
    if (a.innerHTML === "1,456") {
      a.innerHTML = "1,457";
    } else if (a.innerHTML ==="1,457") {
      a.innerHTML = "1,456";
    } else {
      a.innerHTML = "1,456";
    }

    if (b.innerHTML === "890") {
      b.innerHTML = "891";
    } else if (b.innerHTML ==="891") {
      b.innerHTML = "890";
    } else {
      b.innerHTML = "890";
    }
}

dislikeClick() {
  let c = document.getElementById("number1");
  let d = document.getElementById("number2");
    if (c.innerHTML === "1,456") {
      c.innerHTML = "1,455";
    } else if (c.innerHTML ==="1,455") {
      c.innerHTML = "1,456";
    } else {
      c.innerHTML = "1,456";
    }

    if (d.innerHTML === "890") {
      d.innerHTML = "889";
    } else if (d.innerHTML ==="889") {
      d.innerHTML = "890";
    } else {
      d.innerHTML = "890";
    }
}
}
