import { Day5Detail1Component } from './day5-detail1/day5-detail1.component';
import { Day5DetailComponent } from './day5-detail/day5-detail.component';
import { Observable, of } from 'rxjs';
import { Day5ModalComponent } from './day5-modal/day5-modal.component';
import { MatDialog } from '@angular/material';
import { spots } from './../model/spots';
import { Spot } from './../model/spot';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {

  lat: number = 34.987745;
  lng: number = 135.747870;
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
    this.dialog.open(Day5ModalComponent);
  }
  getSpots(): Observable<Spot[]> {
    return of(spots);
  }
  changeLatLng(lat,lng){
    this.lat=+lat;
    this.lng=+lng;
  }
  openToDoDialog(){
    this.dialog.open(Day5DetailComponent);
  }
  openToDoDialog1(){
    this.dialog.open(Day5Detail1Component);
  }
  markers: Spot[];

  ngOnInit() {
    this.getSpots().subscribe(spots => { this.markers = spots });

  }

}
