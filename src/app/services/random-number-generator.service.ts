import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberGeneratorService {
  private subscribersCount = 0;
  private randomNumber: Observable<number>;
  private _holdNumber = 0;
  constructor() { }
  getrandomnumber() {
    this.subscribersCount++;
    if (!this.randomNumber) {
      this.randomNumber = new Observable((subject: Observer<number>) => {
        setInterval(() => {
          this._holdNumber++;
          subject.next(this._holdNumber);
        }, 3000);
      });
    }
    return this.randomNumber;
  }

  getSubscribersCount(): number {
    return this.subscribersCount;
  }
}
