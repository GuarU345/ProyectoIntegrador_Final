import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usuario } from 'src/app/Modelos/Usuario';
import { LogRegService } from 'src/app/Servicios/log-reg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  FormularioRegistro= new FormGroup({

    Email:new FormControl(null,[Validators.required,Validators.email]),
    Password: new FormControl(null,[Validators.required]),
  })

  registro:usuario={
    "email":'',
    "password":''
  }

  constructor(private servicereg:LogRegService) {

   }
   register(){
     this.servicereg.register(this.registro).subscribe((reg:any)=>{
       this.registro=reg
       alert("Registrado Exitosamente")
     })

   }

  ngOnInit(): void {
  }

  get CorreoValidation(){
    return(
      this.FormularioRegistro.get('Email')?.invalid && this.FormularioRegistro.get('Email')?.touched
    )
  }

  get passwordValidation(){
    return(
      this.FormularioRegistro.get('Password')?.invalid && this.FormularioRegistro.get('Password')?.touched
    )
  }

}
