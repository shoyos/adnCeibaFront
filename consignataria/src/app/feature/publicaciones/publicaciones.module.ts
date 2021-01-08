import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { SharedModule } from '@shared/shared.module';
import { ProductoRoutingModule } from './publicaciones-routing.module';
import { PublicacionService } from './components/publicacion/shared/services/publicacion.service';
import { AddPublicacionComponent } from './components/add-publicacion/add-publicacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublicacionComponent,
    AddPublicacionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductoRoutingModule,
  ],
  providers: [PublicacionService]

})
export class PublicacionesModule { }
