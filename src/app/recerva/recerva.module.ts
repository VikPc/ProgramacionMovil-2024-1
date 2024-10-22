import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecervaPageRoutingModule } from './recerva-routing.module';

import { RecervaPage } from './recerva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecervaPageRoutingModule
  ],
  declarations: [RecervaPage]
})
export class RecervaPageModule {}
