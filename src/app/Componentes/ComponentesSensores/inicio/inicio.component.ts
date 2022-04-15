import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  public load:boolean=false
  ngOnInit(): void {
    setTimeout(()=>{
      this.load=true
    },2500)
  }

}
