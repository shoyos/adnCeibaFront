import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DialogData, ModoApertura } from '../publicacion/publicacion.component';
import { Publicacion } from '../publicacion/shared/model/publicacion';
import { PublicacionService } from '../publicacion/shared/services/publicacion.service';



@Component({
  selector: 'app-add-publicacion',
  templateUrl: './add-publicacion.component.html',
  styleUrls: ['./add-publicacion.component.css']
})
export class AddPublicacionComponent implements OnInit {

  form : FormGroup;
  publicacion: Publicacion;
  listaPublicaciones : any [];

  constructor(public dialogRef: MatDialogRef<AddPublicacionComponent>, private formBuilder: FormBuilder,
    private apiService:PublicacionService, @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
      
      this.listaPublicaciones = [
        {"idTipoPublicacion" : 1 , "descripcion": "Estándar"},
        {"idTipoPublicacion" : 2, "descripcion" :"Vip"}
      ];

      this.publicacion = {} as Publicacion;

      this.form = this.formBuilder.group({
        placa : new FormControl('', [Validators.required,  Validators.maxLength(6) ]),
        numeroMotor : new FormControl('', [Validators.required,  Validators.maxLength(10) ]),
        kilometraje : new  FormControl('', Validators.min(0)),
        cilindraje : new  FormControl('', Validators.min(0)),
        fechaVencimientoSoat : new  FormControl('', Validators.required),
        modelo :  new  FormControl('', Validators.min(0)),
        valorVenta : new  FormControl('', Validators.required),
        idTipoPublicacion : new  FormControl('', Validators.required),
        fechaInicio : new  FormControl('', Validators.required),
        });
    }

  ngOnInit(): void {
    this.verificarModoApertura(this.data);
  }

  isEmptyOrUndefinedOrNull (data:any) {
    let resp = data != '' || data != undefined  || data != null ? false : true;
    return resp
  }

  verificarModoApertura(data : DialogData ) {
    
    if (data.modoApertura == ModoApertura.edicion) {
      this.form.patchValue({
        placa : this.data.publicacion.placa,
        numeroMotor : ! this.isEmptyOrUndefinedOrNull(this.data.publicacion.numeroMotor) ? this.data.publicacion.numeroMotor : '',
        kilometraje : this.data.publicacion.kilometraje,
        cilindraje : this.data.publicacion.cilindraje,
        fechaVencimientoSoat : ! this.isEmptyOrUndefinedOrNull(this.data.publicacion.fechaVencimientoSoat) ? this.data.publicacion.fechaVencimientoSoat : null,
        modelo :  this.data.publicacion.modelo,
        valorVenta : this.data.publicacion.valorVenta,
        idTipoPublicacion : this.data.publicacion.idTipoPublicacion,
        fechaInicio : ! this.isEmptyOrUndefinedOrNull(this.data.publicacion.fechaInicio) ? this.data.publicacion.fechaInicio : null,
      })

      this.form.get('placa')?.disable();
      this.form.get('numeroMotor')?.disable();

    }
  }

  guardarPublicacion (){
    this.formToModel();
    this.apiService.agregar(this.publicacion).subscribe(result => {
      debugger
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Guardado Exitoso',
        showConfirmButton: false,
      })
      this.close();
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error cargando datos!',
      })
    })
    this.close();
  }

  formToModel(){
    this.publicacion.placa = this.form.get("placa")?.value;
    this.publicacion.numeroMotor = this.form.get("numeroMotor")?.value;
    this.publicacion.kilometraje = this.form.get("kilometraje")?.value;
    this.publicacion.cilindraje = this.form.get("cilindraje")?.value;
    this.publicacion.fechaVencimientoSoat = this.form.get("fechaVencimientoSoat")?.value;
    this.publicacion.modelo = this.form.get("modelo")?.value;
    this.publicacion.valorVenta =  this.form.get("valorVenta")?.value;
    this.publicacion.idTipoPublicacion = this.form.get("idTipoPublicacion")?.value;
    this.publicacion.fechaInicio = this.form.get("fechaInicio")?.value;
    this.publicacion.id = this.data.modoApertura == 1 ? 0 : this.data.publicacion.id;
  }

  close(): void {
    this.dialogRef.close();
  }

}
