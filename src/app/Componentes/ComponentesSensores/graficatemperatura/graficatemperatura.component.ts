
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
          type: 'bar',
          data: {
            datasets: [
              {
                label: 'Datos',
                data: data,
                borderWidth: 3,
                backgroundColor: '',
                borderColor: '#3e95cd',
              }
            ]
          }
        })
      })
      
    })
  }
}