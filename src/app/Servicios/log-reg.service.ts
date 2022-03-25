import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogRegService {
  url:string="http://127.0.0.1:3333/"

  constructor(private httpclient:HttpClient) { }

  register(reg:any){
    const direccion=this.url+"register"
    return this.httpclient.post(direccion,reg)
  }
  login(log:any){
   const direccion=this.url+"login"
   return this.httpclient.post(direccion,log)
  }


}
