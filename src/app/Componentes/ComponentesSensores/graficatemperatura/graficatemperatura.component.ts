import { Component, OnInit, ViewChild } from '@angular/core';
import { SensorTemYHumService } from '../../../Servicios/sensor-tem-y-hum.service'
import { Chart, registerables } from 'chart.js'
import { mostrarDato, ValorAltoTemyHum,ValorBajoTemyHum ,InsertarFecha } from '../../../Modelos/datosTemyHum'
import { Router, ActivatedRoute } from '@angular/router'
import { interval } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms'


@Component({
  selector: 'app-graficatemperatura',
  templateUrl: './graficatemperatura.component.html',
  styleUrls: ['./graficatemperatura.component.css']
})
export class GraficatemperaturaComponent implements OnInit {

  displayedColumns: string[] = ['temperatura', 'humedad' , 'fecha'];
  dataSource = new MatTableDataSource<mostrarDato>([]);;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private api:SensorTemYHumService,private activarrouter:ActivatedRoute,private router:Router) {
    Chart.register(...registerables)
  }
  
  mostrar!:mostrarDato[]
  ValorAlto!:ValorAltoTemyHum[]
  ValorBajo!:ValorBajoTemyHum[]
  chart: any = []

  nuevoFormuno = new FormGroup({
    fecha: new FormControl(''),
  })

  ngOnInit(): void {
    this.MostrarDatos()
    this.ValorAltoTemyHum()
    this.ValorBajoTemyHum()
  }

  MostrarDatos(){
    const contador=interval(5000)
    contador.subscribe(()=>{
      this.api.DatosTemyHum().subscribe(data => {
        this.dataSource.data = data
        console.log(this.mostrar)
      })
    })
  }

  ValorAltoTemyHum(){
    const contador=interval(5000)
    contador.subscribe(()=>{
      this.api.ValorAltoTemyHum().subscribe(data => {
        this.ValorAlto = data
        console.log(this.mostrar)
      })
    })
  }

  ValorBajoTemyHum(){
    const contador=interval(5000)
    contador.subscribe(()=>{
      this.api.ValorBajoTemyHum().subscribe(data => {
        this.ValorBajo = data
        console.log(this.mostrar)
      })
    })
  }

  postForm(form:InsertarFecha){
    this.api.InsertarFecha(form).subscribe(data => {
      this.mostrar = data
      console.log(data)
      var fecha = []
      var tempertura = []
      var humedad = []

      for (var i in data) {
        fecha.push(data[i].fecha)
        tempertura.push(data[i].temperatura);
        humedad.push(data[i].humedad);
      }

      if(this.chart instanceof Chart)
        {
          this.chart.destroy();
        }

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: fecha,
            datasets: [
              {
                label: 'Temperatura',
                data: tempertura,
                borderWidth: 3,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
              },
              {
                label: 'Humedad',
                data: humedad,
                borderWidth: 3,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
              },
            ]
          },options: {
            indexAxis: 'y',
            responsive: true,
            scales:{
              y:{
                beginAtZero: false
              }
            }
          }
        })
    })
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}