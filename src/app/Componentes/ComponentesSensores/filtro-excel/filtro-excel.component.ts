import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { SensorTemYHumService } from '../../../Servicios/sensor-tem-y-hum.service'
import { mostrarDato, ValorAltoTemyHum,ValorBajoTemyHum ,InsertarFecha, FiltrarFecha } from '../../../Modelos/datosTemyHum'

@Component({
  selector: 'app-filtro-excel',
  templateUrl: './filtro-excel.component.html',
  styleUrls: ['./filtro-excel.component.css']
})
export class FiltroExcelComponent implements OnInit {

  constructor(private api:SensorTemYHumService) { }

  FechaExcel = new FormGroup({
    fecha: new FormControl(''),
  })

  ngOnInit(): void {
  }
  
  exportarExcel(form:FiltrarFecha){
    let workbook = new Workbook()
    let worksheet = workbook.addWorksheet('TempyHum')
    worksheet.columns = [
      { header: 'temperatura' , key: 'temperatura', width: 13},
      { header: 'humedad' , key: 'humedad', width: 10 },
      { header: 'fecha' , key: 'fecha', width: 25 }
    ];

    this.api.filtrarExcel(form).subscribe(data => {
      data.forEach(data => {
        worksheet.addRow({temperatura: data.temperatura, humedad: data.humedad, fecha: data.fecha})
      });
  
      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'text/csv' });
        fs.saveAs(blob, 'DatosTempyHum.xlsx')
      })
    })
  }

}
