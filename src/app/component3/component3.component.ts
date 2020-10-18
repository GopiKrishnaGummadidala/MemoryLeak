import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {
  products: Observable<string[]>;
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.products = this._http.get<string[]>('http://localhost:62799/api/Values');
  }

}
