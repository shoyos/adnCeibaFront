import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        debugger
        if (error.hasOwnProperty('status') && !error.error.hasOwnProperty('message')) {
            let descripcionErrorGeneral = this.obtenerErrorHttpCode(error.status);
            error.error.message = descripcionErrorGeneral;
            //error.message = a;
            return throwError(error);
        } else{
          return throwError(error);
        }
      })
    );    
  }

  obtenerErrorHttpCode(httpStatus : number) : string{
    let resp 
    switch (httpStatus) {

        case 400: 
            resp = 'El servidor no puede procesar la petición por un error de sintaxis del cliente.';
            break;
        case 403: 
            resp = 'Acceso denegado.';
            break;
        case 404: 
            resp = 'No se encuentra la petición.';
            break;
        case 405: 
            resp = 'Se ha hecho una petición con un recurso no soportado por ese recurso (GET, POST, PUT, DELETE).';
            break;
        
        case 500: 
            resp = 'Error inesperado en el servidor.';
            break;

        case 501: 
            resp = 'El servidor o no reconoce el método del la petición o carece de la capacidad para completarlo.';
            break;

        case 503: 
            resp = 'El servidor no esta disponible.';
            break;

        case 504: 
            resp = 'El tiempo de espera para la petición se ha excedido';
            break;
        default: return 'Error Inesperado'
    }
    return resp;
  }
  
}