import { Component, OnInit } from '@angular/core';
import { RandomNumberGeneratorService } from '../services/random-number-generator.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
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
