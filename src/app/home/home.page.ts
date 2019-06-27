import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  row: Array<any> = [];
  col: Array<any> = [];

  constructor() {
    this.row = Array.from({length:10},(v,k)=>k+1);
    this.col = Array.from({length:20},(v,k)=>k+1);

  }
  counter = 0;
  changeColor(e){
    console.log(e)
    this.counter++;
    let colors = ["#ff0000","#ff4000","#ff8000","#ffbf00"]
    if(this.counter==3)
    {
      this.counter=0
    }
    let randomColor = colors[this.counter]
    e.target.style.background = randomColor;
    setTimeout(()=>{e.target.style.background = "black"},200)
  }
}

