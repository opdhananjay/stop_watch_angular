import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {

  public minutes = 0;
  public seconds = 0;
  interval:any

  public start(){
    this.interval = setInterval(() => {
      this.seconds++
      if(this.seconds === 10){
        this.seconds = 0;
        this.minutes++;
      }
    }, 1000);
    console.log(this.interval);
  }
  
  public stop(){
    this.minutes = this.minutes;
    this.seconds = this.seconds;
    clearInterval(this.interval);
  }

  public reset(){
    this.minutes = 0;
    this.seconds = 0;
    clearInterval(this.interval);
  }


}
