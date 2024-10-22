import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuestraPageRoutingModule } from './muestra-routing.module';

import { MuestraPage } from './muestra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuestraPageRoutingModule
  ],
  declarations: [MuestraPage]
})
export class MuestraPageModule {}
