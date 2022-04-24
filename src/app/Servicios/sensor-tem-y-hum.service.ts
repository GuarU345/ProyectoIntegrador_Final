import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Observable } from 'rxjs'
import { mostrarDatos,ValorAltoTemyHum,ValorBajoTemyHum,InsertarFecha } from '../Modelos/datosTemyHum'

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

  InsertarFecha(from:InsertarFecha): Observable<InsertarFecha[]>{
    const direccion=this.url+"filtrarTemyHum"
    return this.httpclient.post<InsertarFecha[]>(direccion,from)
  }

  ValorAltoTemyHum(): Observable<ValorAltoTemyHum[]>{
    const direccion=this.url+"ValorAltoTemyHum"
    return this.httpclient.get<ValorAltoTemyHum[]>(direccion)
  }

  ValorBajoTemyHum(): Observable<ValorBajoTemyHum[]>{
    const direccion=this.url+"ValorBajoTemyHum"
    return this.httpclient.get<ValorBajoTemyHum[]>(direccion)
  }
}
