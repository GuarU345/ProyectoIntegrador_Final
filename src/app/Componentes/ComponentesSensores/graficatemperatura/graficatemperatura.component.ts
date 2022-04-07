
import { Component, OnInit } from '@angular/core';
import { SensorTemperaturaService } from '../../../Servicios/sensor-temperatura.service'
import { Chart, registerables } from 'chart.js'
import { mostrar } from '../../../Modelos/datos'


@Component({
  selector: 'app-graficatemperatura',
  templateUrl: './graficatemperatura.component.html',
  styleUrls: ['./graficatemperatura.component.css']
})
export class GraficatemperaturaComponent implements OnInit {

  constructor(private api:SensorTemperaturaService) {
    Chart.register(...registerables)
   }
  
  mostrar:mostrar={
    "temperatura":'',
    "humedad":''
  }
  Chart:any=[]
  Utils:any
  ngOnInit(): void {
    this.api.mostrar().subscribe((dat:any) => {
      this.mostrar = dat
      console.log(this.mostrar)



})
}
}