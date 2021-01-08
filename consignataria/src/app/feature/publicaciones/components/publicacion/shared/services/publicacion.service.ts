import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "@core/services/base.service";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Publicacion } from "../model/publicacion";



@Injectable()
export class PublicacionService extends BaseService {
    endPoint: string;

    constructor(protected http: HttpClient) {
        super(http);
        this.endPoint =  environment.endpointPublicaciones

    }

    /**
    * obtenerTodos
    */
    public obtenerTodos() : Observable<any> {
        debugger
        return this.http.get<any>(this.endPoint)
    }
    
    public agregar(publicacion : Publicacion) : Observable<any> {
        return this.http.post<Publicacion>(this.endPoint, publicacion)
      
    }

    public eliminar(idPublicacion : number) : Observable<any> {
        return this.http.delete<Publicacion>(this.endPoint+'/'+idPublicacion.toString())
      
    }


  
}