import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogRegService {
  url:string="http://18.117.157.200:3333/"

  constructor(private httpclient:HttpClient) { }

  register(reg:any){
    const direccion=this.url+"register"
    return this.httpclient.post(direccion,reg)
  }
  login(log:any){
   const direccion=this.url+"login"
   return this.httpclient.post(direccion,log)
  }
  token(dat:any){
    const direccion=this.url+"token"
    return this.httpclient.post(direccion,dat)
  }
  logout(){
    const direccion=this.url+"logout"
    return this.httpclient.get(direccion)
  }


}
