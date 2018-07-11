import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

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
import { ToDoModalComponent } from './air-port-line/to-do-modal/to-do-modal.component';
import { DirectionComponent } from './direction/direction.component';
import { AgmDirectionModule } from 'agm-direction';
import { DirectionModalComponent } from './direction/direction-modal/direction-modal.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { Day2DetailComponent } from './day2/day2-detail/day2-detail.component';
import { Day2Detail1Component } from './day2/day2-detail1/day2-detail1.component';
import { Day3DetailComponent } from './day3/day3-detail/day3-detail.component';
import { Day3Detail1Component } from './day3/day3-detail1/day3-detail1.component';
import { Day3Detail2Component } from './day3/day3-detail2/day3-detail2.component';
import { Day4DetailComponent } from './day4/day4-detail/day4-detail.component';
import { Day5DetailComponent } from './day5/day5-detail/day5-detail.component';
import { Day5Detail1Component } from './day5/day5-detail1/day5-detail1.component';

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
    ToDoModalComponent,
    DirectionComponent,
    DirectionModalComponent,
    Day2DetailComponent,
    Day2Detail1Component,
    Day3DetailComponent,
    Day3Detail1Component,
    Day3Detail2Component,
    Day4DetailComponent,
    Day5DetailComponent,
    Day5Detail1Component,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedMaterialModule, HttpClientModule, HttpClientJsonpModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgkSTUKQ5NYL99GCmZrNPEaXEoNHi2Mq0',
      language: 'zh-TW'
    }), AgmDirectionModule
  ],
  entryComponents: [Day2ModalComponent, Day3ModalComponent, Day4ModalComponent, Day5ModalComponent, AirPortLineModalComponent, ToDoModalComponent, DirectionModalComponent, Day2DetailComponent,
    Day2Detail1Component,
    Day3DetailComponent,
    Day3Detail1Component,
    Day3Detail2Component,
    Day4DetailComponent,
    Day5DetailComponent,
    Day5Detail1Component,],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
