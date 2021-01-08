import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { ErrorService } from "@core/services/error.service";
import { NotificationService } from "@core/services/notificaciones.service";
import { environment } from "src/environments/environment";
import { HTTP_ERRORES_CODIGO } from "./http-codigo-error";


const NO_HAY_INTERNET = 'Lo sentimos, no se detecta conexión a internet';
const PETICION_FALLIDA = 'Error inesperado en la petición';

@Injectable()
export class ManejadorError implements ErrorHandler {
  constructor(private injector: Injector) { }
  
  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const notifier = this.injector.get(NotificationService);

    let message;
    let stackTrace;
    if (error instanceof HttpErrorResponse) {
      debugger
      // Server error
      message = errorService.getServerErrorMessage(error);
      //stackTrace = errorService.getServerErrorStackTrace(error);
      notifier.showError(message);
    } else {
      debugger
      // Client Error
      message = errorService.getClientErrorMessage(error);
      notifier.showError(message);
    }
    // Always log errors
    console.error(error);
  }

/*
  erroresHttp : {} 
  constructor() {
    this.erroresHttp = {
      400: 'El servidor no puede procesar la petición por un error de sintaxis del cliente.',
      403: 'Acceso denegado.',
      404: 'No se encuentra la petición.',
      405: 'Se ha hecho una petición con un recurso no soportado por ese recurso (GET, POST, PUT, DELETE).',
      500: 'Error inesperado en el servidor.',
      501: 'El servidor o no reconoce el método del la petición o carece de la capacidad para completarlo.',
      503: 'El servidor no esta disponible.',
      504: 'El tiempo de espera para la petición se ha excedido',
    }
  }

    handleError(error: string | Error): void {
      debugger
      const mensajeError = this.mensajePorDefecto(error);
      this.imprimirErrorConsola(mensajeError);
    }
  
    private mensajePorDefecto(error : any): any {
      debugger
      if (error instanceof HttpErrorResponse) {
        if (!navigator.onLine) {
          return NO_HAY_INTERNET;
        }
        if (error.hasOwnProperty('status') && !error.error.hasOwnProperty('mensaje')) {
          return this.obtenerErrorHttpCode(error.status);
        }
      }
      return error;
    }
  
    private imprimirErrorConsola(mensaje:any): void {
      const respuesta = {
        fecha: new Date().toLocaleString(),
        path: window.location.href,
        mensaje,
      };
      if (!environment.production) {
        window.console.error('Error inesperado:\n', respuesta);
      }
    }
  
    public obtenerErrorHttpCode(httpCode: number): any {
      if (typeof  httpCode === 'number' ) {
        let httptostring = httpCode.toString();
      }
      if (!HTTP_ERRORES_CODIGO.hasOwnProperty(httpCode)) {
        return PETICION_FALLIDA;
      } else{
        return 'Error' ;
      }
    }
*/

}