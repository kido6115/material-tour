import { Day2ModalComponent } from './day2-modal/day2-modal.component';
import { spots } from './../model/spots';
import { HttpClient } from '@angular/common/http';
import { Spot } from './../model/spot';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {
  lat: number = 35.015127;
  lng: number = 135.677728;
  zoomValue: number = 16;
  iconUrl: string = "./assets/gps.gif";
  geojson = './assets/bike.json';
  isLocation: boolean = false;
  isSpot: boolean = true;
  isRoute: boolean = false;
  constructor(private httpClient: HttpClient, public dialog: MatDialog) {

  }

  public getGeoJsonLayer() {
    return this.httpClient.get<any[]>(this.geojson).pipe(map(res => {
      return res
    }));
  }
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
  showRoute(event) {
    if (event.checked) {
      this.getGeoJsonLayer().subscribe(result => {
        this.bikeJson = result;
        this.isRoute = true;
      });
    } else {
      this.bikeJson = null;
      this.isRoute = false;
    }

  }
  openDialog() {
    this.dialog.open(Day2ModalComponent);
  }
  markers: Spot[];
  bikeJson: Object = null;

  ngOnInit() {
    this.getGeoJsonLayer().subscribe(result => {
      this.bikeJson = result;
      this.markers = spots;
      console.log(result);
    });
  }

}
