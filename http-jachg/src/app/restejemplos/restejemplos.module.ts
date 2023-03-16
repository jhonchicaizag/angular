import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeticionhttpComponent } from './peticionhttp/peticionhttp.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PeticionhttpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    PeticionhttpComponent
  ]
})
export class RestejemplosModule { }
