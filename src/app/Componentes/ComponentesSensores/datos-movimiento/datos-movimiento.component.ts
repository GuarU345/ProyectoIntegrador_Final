import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { mostrarDatos } from '../../../Modelos/datosMovimiento'
import { SensorMovimientoService } from '../../../Servicios/sensor-movimiento.service'
import { Route, Router } from '@angular/router'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

//const DATA: mostrarDatos[] = [];

@Component({
  selector: 'app-datos-movimiento',
  templateUrl: './datos-movimiento.component.html',
  styleUrls: ['./datos-movimiento.component.css']
})
export class DatosMovimientoComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'movimiento', 'fecha'];
  dataSource = new MatTableDataSource<mostrarDatos>([]);;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  datosmovimiento!: mostrarDatos[]

  constructor(private api:SensorMovimientoService,private router:Router) { }

  ngOnInit(): void {
    const contador=interval(3000)
    contador.subscribe(()=>{
      this.api.mostrarMovimiento().subscribe(data => {
        this.dataSource.data = data
        console.log(this.datosmovimiento)
      })
    })
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  } 
}
