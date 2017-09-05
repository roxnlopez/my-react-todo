import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterSwordComponent } from '../master-sword/master-sword.component';
import { HylianSwordComponent } from '../hylian-sword/hylian-sword.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MasterSwordComponent,
  	HylianSwordComponent
  ],
  exports: [
  	MasterSwordComponent,
  	HylianSwordComponent
  ]

})
export class EquipmentModule { }
