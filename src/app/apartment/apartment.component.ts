import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  lat: number = 34.981299;
  lng: number = 135.771653;
  url = "./assets/apartment.json";
  zoomValue: number = 15;
  iconUrl: string = "./assets/gps.gif";
  isSuper: boolean = false;
  isRoute: boolean = false;
  isLocation: boolean = false;
  constructor(private httpClient: HttpClient) {

  }
  public getGeoJsonLayer() {
    return this.httpClient.get<any[]>(this.url).pipe(map(res => {
      return res
    }));
  }
  showGps() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        var interval = setInterval(() => {
          if (!window.location.href.match('apartment')) {
            // if (this.lng === +pos.coords.longitude && this.lat === +pos.coords.latitude) {
            clearInterval(interval);
          } else {
            this.lng = +pos.coords.longitude;
            this.lat = +pos.coords.latitude;
          }
        }, 2000);
      });

    }
    this.isLocation = true;
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(pos => {
    //     if (this.lng === +pos.coords.longitude && this.lat === +pos.coords.latitude) {
    //     } else {
    //       this.lng = +pos.coords.longitude;
    //       this.lat = +pos.coords.latitude;
    //     }
    //   });
    //   var interval = setInterval(() => {
    //     navigator.geolocation.getCurrentPosition(pos => {
    //       if(!window.location.href.match('apartment')){
    //       // if (this.lng === +pos.coords.longitude && this.lat === +pos.coords.latitude) {
    //         clearInterval(interval);
    //       } else {
    //         this.lng = +pos.coords.longitude;
    //         this.lat = +pos.coords.latitude;
    //       }
    //     });
    //   }, 2000);

    // }
    // this.isLocation = true;
  }
  showRoute(event) {
    if (event.checked) {
      this.getGeoJsonLayer().subscribe(result => {
        this.geoJson = result;
        this.isRoute = true;
      });
    } else {
      this.geoJson = null;
      this.isRoute = false;
    }

  }
  public showSuper(event) {
    if (event.checked) {
      this.isSuper = true;
    } else {
      this.isSuper = false;
    }

  }
  super: any[] = [
    {
      lng: 135.774396,
      lat: 34.983768,
      label: '超市',
      icon: './assets/shopping_cart.png',
      draggable: false
    }, {
      lng: 135.770259,
      lat: 34.981325,
      label: '超商(全家)',
      icon: './assets/shop.png',
      draggable: false
    }, {
      lng: 135.773528,
      lat: 34.982007,
      label: '超商(Daily)',
      icon: './assets/shop.png',
      draggable: false
    }, {
      lng: 135.770531,
      lat: 34.980829,
      label: '超商(Daily)',
      icon: './assets/shop.png',
      draggable: false
    },
  ]
  markers: any[] = [
    {
      lng: 135.769949,
      lat: 34.981282,
      label: '東福寺',
      draggable: false
    }, {
      lng: 135.775934,
      lat: 34.981461,
      label: '民宿',
      draggable: false
    },
  ]
  hints: any[] = [
    {
      lng: 135.770423,
      lat: 34.980788,
      icon: './assets/one.png',
      draggable: false
    }, {
      lng: 135.773753,
      lat: 34.982484,
      icon: './assets/two.png',
      draggable: false
    }, {
      lng: 135.775973,
      lat: 34.981881,
      icon: './assets/three.png',
      draggable: false
    }, {
      lng: 135.775922,
      lat: 34.981455,
      icon: './assets/four.png',
      draggable: false
    },
  ]
  geoJson: Object = null;
  ngOnInit() {
  }

}
