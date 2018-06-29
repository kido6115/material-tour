import { HttpClient } from '@angular/common/http';
import { Spot } from './../model/spot';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

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
  isRoute:boolean=false;
  constructor(private httpClient:HttpClient) {

  }

  public getGeoJsonLayer() {
    return this.httpClient.get<any[]>(this.geojson).pipe(map(res => {
      return res
    }));
  }
  showGps() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    } else {
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
  markers: Spot[];
  bikeJson:Object=null;

  ngOnInit() {
    this.getGeoJsonLayer().subscribe(result=>{
      this.bikeJson = result;
      console.log(result);
    });
  }

}
