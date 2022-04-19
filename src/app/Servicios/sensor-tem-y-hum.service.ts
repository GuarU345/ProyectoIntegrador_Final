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

  DatosTemyHum(): Observable<mostrarDatos[]>{
    const direccion=this.url+"DatosTemyHum"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }

  DatosTemyHumGrafica(): Observable<mostrarDatos[]>{
    const direccion=this.url+"DatosTemyHumGrafica"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }
}
