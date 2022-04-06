import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogRegService } from 'src/app/Servicios/log-reg.service';

@Component({
  selector: 'app-iniciosensores',
  templateUrl: './iniciosensores.component.html',
  styleUrls: ['./iniciosensores.component.css']
})
export class IniciosensoresComponent implements OnInit {

  constructor(private inicioservice:LogRegService,private router:Router) { }
  ngOnInit(): void {

  }
  getUsuario(){
    return localStorage.getItem("usuario")
  }
  logout(){
    this.inicioservice.logout().subscribe((dat:any)=>{
      console.log(dat)
    })
    localStorage.removeItem("usuario")
    localStorage.removeItem("token")
    this.router.navigate(['/login'])
  }
}
