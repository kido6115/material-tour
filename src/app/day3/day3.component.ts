import { MatDialog } from '@angular/material';
import { Day3ModalComponent } from './day3-modal/day3-modal.component';
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
  zoomValue: number = 14;
  iconUrl: string = "./assets/gps.gif";
  geojson = './assets/bike.json';
  isLocation: boolean = false;
  isSpot: boolean = true;

  constructor(public dialog:MatDialog) { }
  watch;
  showGps() {
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true,
        maximumAge: 1000
      };
      this.watch = navigator.geolocation.watchPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        console.log("watch");
        var id=this.watch;
        var stops = document.getElementsByClassName("side");
        for (var i = 0; i < stops.length; i++) {
          stops[i].addEventListener('click', function () {
            navigator.geolocation.clearWatch(id);
            console.log("clear");
          });
        }
      }, null, options);
    }
    this.isLocation = true;

  }
  openDialog() {
    this.dialog.open(Day3ModalComponent);
  }
  markers: Spot[];

  ngOnInit() {
    this.markers=spots;

  }

}
