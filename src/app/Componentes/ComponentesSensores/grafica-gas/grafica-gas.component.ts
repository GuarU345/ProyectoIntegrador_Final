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
    let datosid = this.activarrouter.snapshot.paramMap.get('id')
    this.api.DatosGas(datosid).subscribe(data => {
      this.mostrar = data

      this.mostrar.forEach(data => {

        this.chart = new Chart('canvas', {
          type: 'line',
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
