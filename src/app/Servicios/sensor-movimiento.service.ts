import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Observable } from 'rxjs'
import { mostrarDatos } from '../Modelos/datosMovimiento'

@Injectable({
  providedIn: 'root'
})
export class SensorMovimientoService {

  url:string="http://18.117.157.200:3333/"

  constructor(private httpclient:HttpClient) { }

  mostrarMovimiento(): Observable<mostrarDatos[]>{
    const direccion=this.url+"mostrarMovi"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }
}
