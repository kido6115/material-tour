import { AirPortLineComponent } from './air-port-line/air-port-line.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { Day5Component } from './day5/day5.component';
import { Day4Component } from './day4/day4.component';
import { Day3Component } from './day3/day3.component';
import { Day2Component } from './day2/day2.component';
import { Day1Component } from './day1/day1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router} from '@angular/router';

const routes:Routes=[
{path:'dashboard',component:DashboardComponent},
{path:'day1',component:Day1Component},
{path:'day2',component:Day2Component},
{path:'day3',component:Day3Component},
{path:'day4',component:Day4Component},
{path:'day5',component:Day5Component},
{path:'apartment',component:ApartmentComponent},
{path:'air-port-line',component:AirPortLineComponent},

{path:'',redirectTo:'/dashboard',pathMatch:'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
