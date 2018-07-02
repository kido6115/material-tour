import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ApartmentComponent } from './apartment/apartment.component';
import { AirPortLineComponent } from './air-port-line/air-port-line.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    ApartmentComponent,
    AirPortLineComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, AppRoutingModule,SharedMaterialModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgkSTUKQ5NYL99GCmZrNPEaXEoNHi2Mq0',
    language: 'zh-TW'}),HttpClientModule,HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
