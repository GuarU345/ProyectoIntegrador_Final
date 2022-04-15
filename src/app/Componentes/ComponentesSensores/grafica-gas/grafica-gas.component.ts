import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SensorGasService } from '../../../Servicios/sensor-gas.service'
import { Chart, registerables } from 'chart.js'
import { mostrarDato } from '../../../Modelos/datosGas'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-grafica-gas',
  templateUrl: './grafica-gas.component.html',
  styleUrls: ['./grafica-gas.component.css']
})
export class GraficaGasComponent implements OnInit {

  constructor(private api:SensorGasService,private activarrouter:ActivatedRoute,private router:Router) {
    Chart.register(...registerables)
   }

  mostrar!:mostrarDato[]
  chart: any = []

  ngOnInit(): void {
    this.api.DatosGas().subscribe(data => {
      this.mostrar = data
      console.log(data)

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ['gas'],
            datasets: [
              {
                label: 'Datos',
                data: data[0],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[1],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[2],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[3],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[4],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[5],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[6],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[7],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[8],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              },
              {
                label: 'Datos',
                data: data[9],
                borderWidth: 3,
                backgroundColor: "green",
                borderColor: '#1e95fd',
              }
            ]
          }
        })
      })
  }
}
