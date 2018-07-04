import { AirPortLineModalComponent } from './air-port-line-modal/air-port-line-modal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ToDoModalComponent } from './to-do-modal/to-do-modal.component';

@Component({
  selector: 'app-air-port-line',
  templateUrl: './air-port-line.component.html',
  styleUrls: ['./air-port-line.component.css']
})
export class AirPortLineComponent implements OnInit {

  lat: number = 34.803551;
  lng: number = 135.539004;
  zoomValue: number = 9;
  iconUrl: string ="./assets/gps.gif";
  gestureHandling='greedy';
  isLocation:boolean=false;

  constructor(public dialog:MatDialog) {

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
  openDialog(){
    this.dialog.open(AirPortLineModalComponent);
  }
  openToDoDialog(){
    this.dialog.open(ToDoModalComponent);
  }
  markers: any[] = [
    {
      lng: 135.232693,
      lat: 34.433508,
      label: '關西國際機場',
      draggable: true
    },
    {
      lng: 135.759422,
      lat: 34.985359,
      label: '京都',
      draggable: false
    }
  ]
  ngOnInit() {
  }

}
