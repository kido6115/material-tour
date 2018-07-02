import { spots } from './../model/spots';
import { Spot } from './../model/spot';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  lat: number = 35.003796;
  lng: number = 135.775053;
  zoomValue: number = 14;
  iconUrl: string = "./assets/gps.gif";
  geojson = './assets/bike.json';
  isLocation: boolean = false;
  isSpot: boolean = true;

  constructor() { }
  showGps() {
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true,
        maximumAge: 1000
      };
      var watchId = navigator.geolocation.watchPosition(pos => {
        if (!window.location.href.match('day4')) {
          navigator.geolocation.clearWatch(watchId);
          console.log("clear");
        } else {
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;
          console.log("watch");

        }

      }, null, options);
    }
    this.isLocation = true;
  }
  markers: Spot[];

  ngOnInit() {
    this.markers=spots;

  }
}
