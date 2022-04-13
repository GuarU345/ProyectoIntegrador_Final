import { Component, OnInit } from '@angular/core';
import { mostrarDatos } from '../../../Modelos/datosGas'
import { SensorGasService } from '../../../Servicios/sensor-gas.service'
import { Route, Router } from '@angular/router'

@Component({
  selector: 'app-datos-gas',
  templateUrl: './datos-gas.component.html',
  styleUrls: ['./datos-gas.component.css']
})
export class DatosGasComponent implements OnInit {

  datosgas!: mostrarDatos[]

  constructor(private api:SensorGasService,private router:Router) { }

  ngOnInit(): void {
    this.api.mostrarGas().subscribe(data => {
      this.datosgas = data
      console.log(this.datosgas)
    })
  }

  MostrarGrafica(id: any){
    this.router.navigate(['grafGas', id])
  }

}
