import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoriaVentaRoutingModule } from './asesoria-venta-routing.module';
import { CrearAsesoriaComponent } from './components/crear-asesoria/crear-asesoria.component';
import { SharedModule } from '@shared/shared.module';
import { AsesoriaService } from './components/shared/services/asesoria.service';


@NgModule({
  declarations: [CrearAsesoriaComponent],
  imports: [
    CommonModule,
    AsesoriaVentaRoutingModule,
    SharedModule,
  ],
  providers:[AsesoriaService]
})
export class AsesoriaVentaModule { }
