import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantallacarga',
  templateUrl: './pantallacarga.component.html',
  styleUrls: ['./pantallacarga.component.css']
})
export class PantallacargaComponent implements OnInit {

  public load:boolean
  constructor(private router:Router) {
    this.load=false
   }



  ngOnInit(): void {

    setTimeout(()=>{
      this.load=true
    },3000)
  }
  getUsuario(){
    return localStorage.getItem("usuario")
  }

}
