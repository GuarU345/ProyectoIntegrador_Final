import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { mostrarDatos } from '../../../Modelos/datosMovimiento'
import { SensorMovimientoService } from '../../../Servicios/sensor-movimiento.service'
import { Route, Router } from '@angular/router'

@Component({
  selector: 'app-datos-movimiento',
  templateUrl: './datos-movimiento.component.html',
  styleUrls: ['./datos-movimiento.component.css']
})
export class DatosMovimientoComponent implements OnInit {

  datosmovimiento!: mostrarDatos[]

  constructor(private api:SensorMovimientoService,private router:Router) { }

  ngOnInit(): void {
    const contador=interval(3000)
    contador.subscribe(()=>{
      this.api.mostrarMovimiento().subscribe(data => {
        this.datosmovimiento = data
        console.log(this.datosmovimiento)
      })
    })
  }

}
