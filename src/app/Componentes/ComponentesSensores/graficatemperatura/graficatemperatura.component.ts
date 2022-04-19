
import { Component, OnInit } from '@angular/core';
import { SensorTemYHumService } from '../../../Servicios/sensor-tem-y-hum.service'
import { Chart, registerables } from 'chart.js'
import { mostrarDato } from '../../../Modelos/datosTemyHum'
import { Router, ActivatedRoute } from '@angular/router'
import { interval } from 'rxjs';


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
    this.api.DatosTemyHumGrafica().subscribe(data => {
      this.mostrar = data
      console.log(data)

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ['temperatura','humedad'],
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

    this.MostrarDatos()
  }

  MostrarDatos(){
    const contador=interval(5000)
    contador.subscribe(()=>{
      this.api.DatosTemyHum().subscribe(data => {
        this.mostrar = data
        console.log(this.mostrar)
      })
    })
  }
}