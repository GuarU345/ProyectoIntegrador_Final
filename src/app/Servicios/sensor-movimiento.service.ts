import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Observable } from 'rxjs'
import { mostrarDatos } from '../Modelos/datosMovimiento'

@Injectable({
  providedIn: 'root'
})
export class SensorMovimientoService {

  url:string="http://127.0.0.1:3333/"

  constructor(private httpclient:HttpClient) { }

  mostrarMovimiento(): Observable<mostrarDatos[]>{
    const direccion=this.url+"mostrarMovimiento"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }
}