import { Component, OnInit } from '@angular/core';
import { mostrarDatos } from '../../../Modelos/datosTemyHum'
import { SensorTemYHumService } from '../../../Servicios/sensor-tem-y-hum.service'
import { Route, Router } from '@angular/router'

@Component({
  selector: 'app-datos-tem-yhum',
  templateUrl: './datos-tem-yhum.component.html',
  styleUrls: ['./datos-tem-yhum.component.css']
})
export class DatosTemYHumComponent implements OnInit {

  constructor(private api:SensorTemYHumService,private router:Router) { }

  mostrarDatos!:mostrarDatos[]

  ngOnInit(): void {
    this.api.mostrarTemyHum().subscribe(data => {
      this.mostrarDatos = data
      console.log(data)
    })
  }

  MostrarGrafica(id: any){
    this.router.navigate(['grafTempyHum', id])
  }

}
