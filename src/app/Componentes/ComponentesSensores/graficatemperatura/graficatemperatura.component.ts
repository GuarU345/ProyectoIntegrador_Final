
import { Component, OnInit } from '@angular/core';
import { SensorTemYHumService } from '../../../Servicios/sensor-tem-y-hum.service'
import { Chart, registerables } from 'chart.js'
import { mostrarDato } from '../../../Modelos/datosTemyHum'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-graficatemperatura',
  templateUrl: './graficatemperatura.component.html',
  styleUrls: ['./graficatemperatura.component.css']
})
export class GraficatemperaturaComponent implements OnInit {

  constructor(private api:SensorTemYHumService,private activarrouter:ActivatedRoute,private router:Router) {
    Chart.register(...registerables)
   }
  
  mostrar!:mostrarDato[]
  chart: any = []

  ngOnInit(): void {
    let datosid = this.activarrouter.snapshot.paramMap.get('id')
    this.api.DatosTemyHum(datosid).subscribe(data => {
      this.mostrar = data

      this.mostrar.forEach(data => {

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: ['temperatura', 'humedad'],
            datasets: [
              {
                label: 'Datos Temperatura y Humedad',
                data: data,
                fill: false,
                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)'
              }
            ]
          },
          options: {
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 20,
                to: 0,
                loop: true
              }
            },
            scales: {
              y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 100
              }
            },
            layout: {
              padding: {
                  left: 50
              }
            }
          }
        })
      })
      
    })
  }
}