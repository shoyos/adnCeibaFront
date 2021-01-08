import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ErrorService {
  
    getClientErrorMessage(error: Error): string {    
        debugger
      return error.message ? 
             error.message : 
             error.toString();
    }
  
    getServerErrorMessage(error: HttpErrorResponse): string {
      debugger
      return navigator.onLine ?    
             error.error.message :
             'No Internet Connection';
    }    
  }