import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { mostrarDatosLed,Insertar,ContadorLed,InsertarFecha } from '../../../Modelos/datosLed'
import { SensorLedService } from '../../../Servicios/sensor-led.service'
import { Route, Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grafica-led',
  templateUrl: './grafica-led.component.html',
  styleUrls: ['./grafica-led.component.css']
})
export class GraficaLedComponent implements OnInit {

  displayedColumns: string[] = ['led', 'fecha'];
  dataSource = new MatTableDataSource<mostrarDatosLed>([]);;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  datosled!: mostrarDatosLed[]
  contaodrled!:ContadorLed[]

  nuevoFormuno = new FormGroup({
    led: new FormControl('encendido'),
  })

  nuevoFormdos = new FormGroup({
    led: new FormControl('apagado'),
  })

  filtrarfecha = new FormGroup({
    fecha: new FormControl("")
  })

  constructor(private api:SensorLedService,private router:Router) { }

  ngOnInit(): void {
    this.api.DatosLed().subscribe(data => {
      this.dataSource.data = data
      console.log(data)
    })

    this.contadorLed()
  }

  postForm(form:Insertar){
    this.api.InsertarLed(form).subscribe(data => {
      console.log(data)
    })
  }

  filtrarLed(from:InsertarFecha){
    this.api.InsertarFecha(from).subscribe(data => {
      this.dataSource.data = data
      console.log(data)
    })
  }

  contadorLed(){
    const contador=interval(3000)
    contador.subscribe(()=>{
      this.api.ContadorLed().subscribe(data => {
        this.contaodrled = data
        console.log(data)
      })
    })
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}
