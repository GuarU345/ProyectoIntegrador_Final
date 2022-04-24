import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Observable } from 'rxjs'
import { mostrarDatosLed,Insertar,ContadorLed,InsertarFecha } from '../Modelos/datosLed'

@Injectable({
  providedIn: 'root'
})
export class SensorLedService {

  url:string="http://127.0.0.1:3333/"

  constructor(private httpclient:HttpClient) { }

  DatosLed(): Observable<mostrarDatosLed[]>{
    const direccion=this.url+"DatosLed"
    return this.httpclient.get<mostrarDatosLed[]>(direccion)
  }
  
  InsertarLed(from:Insertar): Observable<Insertar[]>{
    const direccion=this.url+"insertarLed"
    return this.httpclient.post<Insertar[]>(direccion,from)
  }

  ContadorLed(): Observable<ContadorLed[]>{
    const direccion=this.url+"contadorLed"
    return this.httpclient.get<ContadorLed[]>(direccion)
  }

  InsertarFecha(from:InsertarFecha): Observable<InsertarFecha[]>{
    const direccion=this.url+"filtrarLed"
    return this.httpclient.post<InsertarFecha[]>(direccion,from)
  }
}
