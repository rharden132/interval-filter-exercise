import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  sub: Subscription;
  numbers = interval(1000);
  evens = this.numbers.pipe(filter( num => num % 2 === 0))
  ngOnInit(): void {
    this.sub = this.evens.subscribe((data) => {
      console.log(data);

    });
  }
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
