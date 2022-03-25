import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

    Email:new FormControl(null,[Validators.required,Validators.email]),
    Password: new FormControl(null,[Validators.required]),


  })

  usuario:usuario={
    "email":'',
    "password":''
  }

  constructor(private logservice:LogRegService,private router:Router) {

   }
   login(){
      this.logservice.login(this.usuario).subscribe((dat:token)=>{
        localStorage.setItem("token",dat.token)
        alert("Sesion Iniciada Correctamente")
        this.usuario.email=""
        this.usuario.password=""
      })
      this.router.navigate([''])
   }

  ngOnInit(): void {
  }

}
