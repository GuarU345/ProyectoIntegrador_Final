import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'

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
  token(dat:any){
    const token=localStorage.getItem("token")
    const header=new HttpHeaders({
      'Authorization':'Bearer '+token
    })
    const direccion=this.url+"token"
    return this.httpclient.post(direccion,dat,{headers:header})
  }
  logout(){
    const token=localStorage.getItem("token")
    const header=new HttpHeaders({
      'Authorization':'Bearer '+token
    })
    const direccion=this.url+"logout"
    return this.httpclient.get(direccion,{headers:header})
  }


}
