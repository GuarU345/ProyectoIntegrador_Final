import { interval } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SensorGasService } from '../../../Servicios/sensor-gas.service'
import { ValorAltoGas,ValorBajoGas,mostrarDatos } from '../../../Modelos/datosGas'
import { Router, ActivatedRoute } from '@angular/router'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grafica-gas',
  templateUrl: './grafica-gas.component.html',
  styleUrls: ['./grafica-gas.component.css']
})
export class GraficaGasComponent implements OnInit {

  constructor(private api:SensorGasService,private activarrouter:ActivatedRoute,private router:Router) { }

  displayedColumns: string[] = ['_id', 'gas', 'fecha'];
  dataSource = new MatTableDataSource<mostrarDatos>([]);;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  mostrar!:mostrarDatos[]
  ValorAlto!:ValorAltoGas[]
  ValorBajo!:ValorBajoGas[]

  ngOnInit(): void {
    this.api.DatosGas().subscribe(data => {
      this.dataSource.data = data
      console.log(data)
    })

    this.MostrarDatos()
  }

  MostrarDatos(){
    const contador=interval(5000)
    contador.subscribe(()=>{
      this.api.DatosGas().subscribe(data => {
        this.mostrar = data
        console.log(this.mostrar)
      })
    })
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}
