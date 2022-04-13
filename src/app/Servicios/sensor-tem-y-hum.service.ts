import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Observable } from 'rxjs'
import { mostrarDatos } from '../Modelos/datosTemyHum'

@Injectable({
  providedIn: 'root'
})
export class SensorTemYHumService {

  url:string="http://127.0.0.1:3333/"

  constructor(private httpclient:HttpClient) { }

  mostrarTemyHum(): Observable<mostrarDatos[]>{
    const direccion=this.url+"mostrarTemyHum"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }

  DatosTemyHum(id:any): Observable<mostrarDatos[]>{
    const direccion=this.url+"DatosTemyHum/" + id
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }
}
