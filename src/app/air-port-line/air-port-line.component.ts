import { AirPortLineModalComponent } from './air-port-line-modal/air-port-line-modal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

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

  isLocation:boolean=false;

  constructor(public dialog:MatDialog) {

  }
  showGps() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        var interval = setInterval(() => {
          if (!window.location.href.match('air-port-line')) {
            clearInterval(interval);
          } else {
            this.lng = +pos.coords.longitude;
            this.lat = +pos.coords.latitude;
          }
        }, 2000);
      });
    }
    this.isLocation = true;
  }
  openDialog(){
    this.dialog.open(AirPortLineModalComponent);
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
