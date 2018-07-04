import { DirectionModalComponent } from './direction-modal/direction-modal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})

export class DirectionComponent implements OnInit {


  lat: number;
  lng: number;
  zoomValue: number = 14;
  iconUrl: string = "./assets/gps.gif";
  geojson = './assets/bike.json';
  isLocation: boolean = false;
  gestureHandling = 'greedy';
  origin: any;
  destination: any;
  travelMode = 'WALKING';
  title;
  isDirect = false;
  // public transitOptions: any = {
  //   modes: ['SUBWAY']
  // }
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
  public setPanel() {
    return document.querySelector('#myPanel');
  }
  openDialog() {
    let dialogRef = this.dialog.open(DirectionModalComponent);
    const sub = dialogRef.componentInstance.onAdd
      .subscribe((data) => {
        this.origin={lat:this.lat,lng:this.lng};
        this.destination = data;
        if (this.destination) {
          this.isDirect = true;
        }
      });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }
  ngOnInit() {
    this.showGps();
  }
}
