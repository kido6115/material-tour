import { spots } from './../model/spots';
import { Spot } from './../model/spot';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {
  lat: number = 34.684458;
  lng: number = 135.835433;
  zoomValue: number = 15;
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
        if (!window.location.href.match('day3')) {
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
