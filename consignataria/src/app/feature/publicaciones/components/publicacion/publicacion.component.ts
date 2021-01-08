import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearAsesoriaComponent } from '@asesoriasventa/components/crear-asesoria/crear-asesoria.component';
import Swal from 'sweetalert2';
import { AddPublicacionComponent } from '../add-publicacion/add-publicacion.component';
import { Publicacion } from './shared/model/publicacion';
import { PublicacionService } from './shared/services/publicacion.service';

export interface DialogData {
  modoApertura: ModoApertura;
  publicacion: Publicacion;
}

export enum ModoApertura {
  "agregar" = 1,
  "edicion" = 2
}

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  headers = ["Placa", "NumMotor", "kilometraje", "modelo", "Cilindraje", "Valor Venta", "Valor sugerido", "Fecha Vencimiento Publicacion"];

  publicaciones: Publicacion[];

  constructor(private apiService: PublicacionService, public dialog: MatDialog) {
    this.publicaciones = [];
  }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.apiService.obtenerTodos().subscribe(result => {
      debugger
      this.publicaciones = result;
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error cargando datos!',
      })
    })
  }

  agregarPublicacion() {
      debugger
      let data = {} as DialogData;
      data.modoApertura = ModoApertura.agregar;
      data.publicacion = {} as Publicacion;
      const dialogRef = this.dialog.open(AddPublicacionComponent, {
        width: '600px',
        height: '500px',
        data : data
      });
      debugger
      dialogRef.afterClosed().subscribe(result => {
        this.obtenerTodos();
      });
  }

  editarPublicacion (publicacion : Publicacion){
      let data = {} as DialogData;
      data.modoApertura = ModoApertura.edicion;
      data.publicacion = publicacion;
      const dialogRef = this.dialog.open(AddPublicacionComponent, {
        width: '600px',
        height: '500px',
        data : data
      });
      dialogRef.afterClosed().subscribe(result => {
        this.obtenerTodos();
      });
  }


  eliminarPublicacion(idPublicacion : number){
      this.apiService.eliminar(idPublicacion).subscribe(result => {
        debugger
        this.publicaciones = result;
        Swal.fire({
          icon: 'info',
          title: 'Información',
          text: "BorradoExitoso",
        })
        this.obtenerTodos();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error cargando datos!',
        })
      })
  }

  crearAsesoria(){
    this.dialog.open(CrearAsesoriaComponent, {
      width: '600px',
      height: '500px',
    });
  }

}
