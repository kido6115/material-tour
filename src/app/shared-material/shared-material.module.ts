import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],exports:[
    MatButtonModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatGridListModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
