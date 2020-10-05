import { Component, OnInit } from '@angular/core';
import { RandomNumberGeneratorService } from '../services/random-number-generator.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  randomNumber: number;
  subscribersCount: number;
  constructor(private _randomNumGenService: RandomNumberGeneratorService) { }

  ngOnInit() {
  }

  getRandomNumber(): void {
    this._randomNumGenService.getrandomnumber().subscribe((num: number) => {
      this.randomNumber = num;
    });
    this.subscribersCount = this._randomNumGenService.getSubscribersCount();
  }

}
