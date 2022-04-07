import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Observable } from 'rxjs'
import { mostrar } from '../Modelos/datos'

@Injectable({
  providedIn: 'root'
})
export class SensorTemperaturaService {

  url:string="http://127.0.0.1:3333/"

  constructor(private httpclient:HttpClient) { }

  mostrar(): Observable<mostrar[]>{
    const direccion=this.url+"mostrar"
    return this.httpclient.get<mostrar[]>(direccion)
  }
}
