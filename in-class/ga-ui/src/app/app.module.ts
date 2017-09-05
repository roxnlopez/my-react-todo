import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UserService } from './services/user/user.service';

import { EquipmentModule } from './equipment/equipment.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EquipmentModule
  ],
  //add to providers
  providers: [
  	UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
