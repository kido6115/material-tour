import { Component, OnInit } from '@angular/core';
import { Spot } from '../model/spot';
import { spots } from '../model/spots';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {

  lat: number = 34.985359;
  lng: number = 135.759422;
  zoomValue: number = 13;
  iconUrl: string ="./assets/gps.gif";

  isLocation:boolean=false;
  isSpot:boolean=true;

  constructor() {

  }
  showGps(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
  } else {
  }
    this.isLocation=true;
  }
  markers:Spot[];
  ngOnInit() {
    this.markers=spots;
  }

}
