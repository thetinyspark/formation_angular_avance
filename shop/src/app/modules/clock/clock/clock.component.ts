import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush})

export class ClockComponent implements OnInit {
  public time:string ="";

  constructor(public cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ticks();
  }

  public ticks() {
    const date = new Date();
    const seconds = date.getSeconds();
   
    this.time = date.toLocaleTimeString();
   if (seconds % 10 === 0) {
      this.cd.markForCheck();
    }
    setTimeout(()=> this.ticks(),1000)
  }
}
