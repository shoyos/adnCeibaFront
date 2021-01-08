import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class BaseService {
    protected http: HttpClient;

    //protected url = 'http://localhost:8080';
    protected url = '/api';
    
    constructor(httpClient: HttpClient) {
      this.http = this.httpClient;
    }
  
    public get httpClient(): HttpClient {
      return this.http;
    }
    /*
    public get baseUrl(): string {
      return this.url;
    }*/
  }