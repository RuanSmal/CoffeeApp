import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlavoursPageRoutingModule } from './flavours-routing.module';

import { FlavoursPage } from './flavours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlavoursPageRoutingModule
  ],
  declarations: [FlavoursPage]
})
export class FlavoursPageModule {}
