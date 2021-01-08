import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(){}

    showSuccess(mensaje: string, title: string ='Operacion Exitosa'): void {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: title,
            text: mensaje,
            showConfirmButton: false,
          })
      }
    
      showError(mensaje: string, title: string ='Error en la operación'): void {
        Swal.fire({
            icon: 'error',
            title: title,
            text: mensaje ,
          })
      }
}