import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { mostrarDatosLed,Insertar } from '../../../Modelos/datosLed'
import { SensorLedService } from '../../../Servicios/sensor-led.service'
import { Route, Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-grafica-led',
  templateUrl: './grafica-led.component.html',
  styleUrls: ['./grafica-led.component.css']
})
export class GraficaLedComponent implements OnInit {

  datosled!: mostrarDatosLed[]

  nuevoFormuno = new FormGroup({
    led: new FormControl('encendido'),
  })

  nuevoFormdos = new FormGroup({
    led: new FormControl('apagado'),
  })

  constructor(private api:SensorLedService,private router:Router) { }

  ngOnInit(): void {
    const contador=interval(3000)
    contador.subscribe(()=>{
      this.api.DatosLed().subscribe(data => {
        this.datosled = data
        
      })
    })
  }

  postForm(form:Insertar){
    this.api.InsertarLed(form).subscribe(data => {
      console.log(data)
    })
  }

}
