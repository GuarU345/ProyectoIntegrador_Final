import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Observable } from 'rxjs'
import { mostrarDatos } from '../Modelos/datosGas'

@Injectable({
  providedIn: 'root'
})
export class SensorGasService {

  url:string="http://127.0.0.1:3333/"

  constructor(private httpclient:HttpClient) { }

  DatosGas(): Observable<mostrarDatos[]>{
    const direccion=this.url+"DatosGas"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }

  DatosGasGrafica(): Observable<mostrarDatos[]>{
    const direccion=this.url+"DatosGasGrafica"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }
}
