import { Day4DetailComponent } from './day4-detail/day4-detail.component';
import { Day3Component } from './../day3/day3.component';
import { Day4ModalComponent } from './day4-modal/day4-modal.component';
import { MatDialog } from '@angular/material';
import { spots } from './../model/spots';
import { Spot } from './../model/spot';
import { Component, OnInit } from '@angular/core';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  lat: number = 34.999287;
  lng: number = 135.771442;
  zoomValue: number = 14;
  iconUrl: string = "./assets/gps.gif";
  geojson = './assets/bike.json';
  isLocation: boolean = false;
  isSpot: boolean = true;
  gestureHandling='greedy';

  constructor(public dialog: MatDialog) { }
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
        var id = this.watch;
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
    this.dialog.open(Day4ModalComponent);
  }
  getSpots(): Observable<Spot[]> {
    return of(spots);
  }
  openToDoDialog(){
    this.dialog.open(Day4DetailComponent);
  }
  markers: Spot[];

  ngOnInit() {
    this.getSpots().subscribe(spots => { this.markers = spots });

  }
}
