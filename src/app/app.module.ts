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
import { Day2ModalComponent } from './day2/day2-modal/day2-modal.component';
import { Day3ModalComponent } from './day3/day3-modal/day3-modal.component';
import { Day4ModalComponent } from './day4/day4-modal/day4-modal.component';
import { Day5ModalComponent } from './day5/day5-modal/day5-modal.component';
import { AirPortLineModalComponent } from './air-port-line/air-port-line-modal/air-port-line-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    ApartmentComponent,
    AirPortLineComponent,
    Day2ModalComponent,
    Day3ModalComponent,
    Day4ModalComponent,
    Day5ModalComponent,
    AirPortLineModalComponent,
     ],
  imports: [
    BrowserModule,BrowserAnimationsModule, AppRoutingModule,SharedMaterialModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgkSTUKQ5NYL99GCmZrNPEaXEoNHi2Mq0',
    language: 'zh-TW'}),HttpClientModule,HttpClientJsonpModule
  ],
  entryComponents:[Day2ModalComponent,Day3ModalComponent,Day4ModalComponent,Day5ModalComponent,AirPortLineModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
