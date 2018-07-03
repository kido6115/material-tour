import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatSlideToggleModule, MatProgressBarModule, MatBadgeModule, MatDialogModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],exports:[
    MatButtonModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatGridListModule,MatSlideToggleModule,MatProgressBarModule,MatBadgeModule
    ,MatDialogModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
