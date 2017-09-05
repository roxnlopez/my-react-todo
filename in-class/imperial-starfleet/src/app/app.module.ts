import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TurretComponent } from './turret/turret.component';
import { DeathSquareComponent } from './death-square/death-square.component';

@NgModule({
  declarations: [
    AppComponent,
    TurretComponent,
    DeathSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
