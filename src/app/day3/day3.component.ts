import { Day3Detail2Component } from './day3-detail2/day3-detail2.component';
import { Day3DetailComponent } from './day3-detail/day3-detail.component';
import { Day3Detail1Component } from './day3-detail1/day3-detail1.component';
import { Observable, of } from 'rxjs';
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
    this.dialog.open(Day3ModalComponent);
  }
  public getSpots(): Observable<Spot[]> {
    return of(spots);
  }
  changeLatLng(lat,lng){
    this.lat=+lat;
    this.lng=+lng;
  }
  openToDoDialog(){
    this.dialog.open(Day3DetailComponent);
  }
  openToDoDialog1(){
    this.dialog.open(Day3Detail1Component);
  }
  openToDoDialog2(){
    this.dialog.open(Day3Detail2Component);
  }
  markers: Spot[];

  ngOnInit() {
    this.getSpots().subscribe(spots => { this.markers = spots });

  }

}
