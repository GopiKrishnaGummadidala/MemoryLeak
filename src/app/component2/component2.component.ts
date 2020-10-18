import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RandomNumberGeneratorService } from '../services/random-number-generator.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit, OnDestroy {
  randomNumber: number;
  subscriberId: number;
  notifier$ = new Subject();
  constructor(private _randomNumGenService: RandomNumberGeneratorService) { }

  ngOnInit() {
    // this._randomNumGenService.getrandomnumber().subscribe((num: number) => {
    //   this.randomNumber = num;
    //   console.log(`Rceived  random number ${this.randomNumber} Subscriber Id : ${this.subscriberId} `);
    // });
    this._randomNumGenService.getrandomnumber().pipe(takeUntil(this.notifier$)).subscribe((num: number) => {
      this.randomNumber = num;
      console.log(`Rceived  random number ${this.randomNumber} Subscriber Id : ${this.subscriberId} `);
    });
    this.subscriberId = this._randomNumGenService.getSubscribersCount();
  }

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
