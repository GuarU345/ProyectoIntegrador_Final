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

  mostrarGas(): Observable<mostrarDatos[]>{
    const direccion=this.url+"mostrarGas"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }

  DatosGas(id:any): Observable<mostrarDatos[]>{
    const direccion=this.url+"DatosGas/" + id
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }
}
