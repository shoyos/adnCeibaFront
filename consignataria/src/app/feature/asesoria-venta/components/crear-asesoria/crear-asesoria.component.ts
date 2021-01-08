import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '@core/services/notificaciones.service';
import { PublicacionService } from '@publicaciones/components/publicacion/shared/services/publicacion.service';
import Swal from 'sweetalert2';
import { Asesoria } from '../shared/model/asesoria.model';
import { AsesoriaService } from '../shared/services/asesoria.service';

@Component({
  selector: 'app-crear-asesoria',
  templateUrl: './crear-asesoria.component.html',
  styleUrls: ['./crear-asesoria.component.css']
})
export class CrearAsesoriaComponent implements OnInit {

  form : FormGroup;
  asesoria: Asesoria;
  listaAsesores : any [];
  listaFranjas : any [];


  constructor(public dialogRef: MatDialogRef<CrearAsesoriaComponent>, private formBuilder: FormBuilder,
    private apiService:AsesoriaService, private notificaionService: NotificationService ) { 

      this.listaAsesores = [
        {"id": "1234", "descripcion":"Juan Perez"},
        {"id": "15677", "descripcion": "Carla Muriel"}
      ];

      this.listaFranjas = [
        {"id":"1", "descripcion":"8-9"},
        {"id":"2", "descripcion":"9-10"},
        {"id":"3", "descripcion":"10-11"},
        {"id":"4", "descripcion":"11-12"},
        {"id":"5", "descripcion":"1-2"}
      ]

      this.asesoria = {} as Asesoria;

      this.form = this.formBuilder.group({
        idDocumentoAsesor : new FormControl('', Validators.required),
        fecha : new FormControl('', Validators.required),
        franjaHoraria : new FormControl('', Validators.required),
        nombreCliente : new FormControl('', Validators.required),
        telefonoCliente : new FormControl('',Validators.maxLength(10)),
      });

  }

  ngOnInit(): void {
  }

  formToModel(){
      this.asesoria.idDocumentoAsesor = this.form.get("idDocumentoAsesor")?.value;
      this.asesoria.fecha = this.form.get("fecha")?.value;
      this.asesoria.franjaHoraria = this.form.get("franjaHoraria")?.value;
      this.asesoria.nombreCliente = this.form.get("nombreCliente")?.value;
      this.asesoria.telefonoCliente = this.form.get("telefonoCliente")?.value;
  }

  guardarAsesoria(){
    this.formToModel();
    this.apiService.agregarAsesoria(this.asesoria).subscribe(result => {
      debugger
      this.notificaionService.showSuccess("Informacion cargada satisfactoriamente", "Guardado éxitoso")
      this.close();
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
