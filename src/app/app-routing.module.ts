import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router} from '@angular/router';

const routes:Routes=[
{path:'dashboard',component:DashboardComponent},
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
