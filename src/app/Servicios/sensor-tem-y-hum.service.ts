import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Observable } from 'rxjs'
import { mostrarDatos,ValorAltoTemyHum,ValorBajoTemyHum,InsertarFecha } from '../Modelos/datosTemyHum'

@Injectable({
  providedIn: 'root'
})
export class SensorTemYHumService {

  url:string="http://18.117.157.200:3333/"

  constructor(private httpclient:HttpClient) { }

  DatosTemyHum(): Observable<mostrarDatos[]>{
    const direccion=this.url+"mostrarTempyHum"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }

  DatosTemyHumGrafica(): Observable<mostrarDatos[]>{
    const direccion=this.url+"mostrarTempyHumGrafica"
    return this.httpclient.get<mostrarDatos[]>(direccion)
  }

  InsertarFecha(from:InsertarFecha): Observable<InsertarFecha[]>{
    const direccion=this.url+"filtrarTempyHum"
    return this.httpclient.post<InsertarFecha[]>(direccion,from)
  }

  ValorAltoTemyHum(): Observable<ValorAltoTemyHum[]>{
    const direccion=this.url+"valorAltoTempyHum"
    return this.httpclient.get<ValorAltoTemyHum[]>(direccion)
  }

  ValorBajoTemyHum(): Observable<ValorBajoTemyHum[]>{
    const direccion=this.url+"valorBajoTempyHum"
    return this.httpclient.get<ValorBajoTemyHum[]>(direccion)
  }
}
