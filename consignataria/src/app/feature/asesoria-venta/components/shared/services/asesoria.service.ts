import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "@core/services/base.service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Asesoria } from "../model/asesoria.model";

@Injectable()
export class AsesoriaService extends BaseService {
    endPoint : string
    
    constructor(protected http: HttpClient) {
        super(http);
        this.endPoint = environment.endpointAsesorias

    }

    public agregarAsesoria(asesoria : Asesoria) : Observable<any> {
        return this.http.post<any>(this.endPoint,asesoria)
    }


  
}