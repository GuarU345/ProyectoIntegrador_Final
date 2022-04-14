import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { token } from 'src/app/Modelos/Token';
import { usuario } from 'src/app/Modelos/Usuario';
import { LogRegService } from 'src/app/Servicios/log-reg.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  FormularioLogueo= new FormGroup({
    Usuario:new FormControl(null,[Validators.required]),
    Email:new FormControl(null,[Validators.required,Validators.email]),
    Password: new FormControl(null,[Validators.required]),


  })
  token:any
  usuario:usuario={
    "username":'',
    "email":'',
    "password":''
  }

  constructor(private logservice:LogRegService,private router:Router) {

   }
   login(){
      this.logservice.login(this.usuario).subscribe((dat:token)=>{
        localStorage.setItem("token",dat.token)
        this.usuario.email=""
        this.usuario.password=""
        this.logservice.token(this.usuario).subscribe((usu:any)=>{
          this.usuario=usu
          localStorage.setItem("usuario",this.usuario.username)
          alert("Bienvenido Usuario "+this.getUsuario())
        })
        this.router.navigate(['/inicio'])
      },error=>{
        alert(error.error)
      })



   }
  public load:boolean=false
  ngOnInit(): void {
    setTimeout(()=>{
      this.load=true
    },2500)
  }

  get CorreoValidation(){
    return(
      this.FormularioLogueo.get('Email')?.invalid && this.FormularioLogueo.get('Email')?.touched
    )
  }

  get passwordValidation(){
    return(
      this.FormularioLogueo.get('Password')?.invalid && this.FormularioLogueo.get('Password')?.touched
    )
  }
  getUsuario(){
    return localStorage.getItem("usuario")
  }







}
