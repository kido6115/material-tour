import { Trips } from './../model/trips';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trips:Trips[];
  constructor() { }

  ngOnInit() {
    this.trips=[
      {tripName:"京都",tripImg:"./assets/kyoto.jpg"},
      {tripName:"嵐山",tripImg:"./assets/arashi_yama.jpg"},
      {tripName:"奈良",tripImg:"./assets/nara.jpg"},
      {tripName:"京都",tripImg:"./assets/fushimi.jpg"},
      {tripName:"京都",tripImg:"./assets/kingaku.jpg"},

    ];
  }

}
