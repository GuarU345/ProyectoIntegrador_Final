import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficatemperaturaComponent } from './Componentes/ComponentesSensores/graficatemperatura/graficatemperatura.component';
import { InicioComponent } from './Componentes/ComponentesSensores/inicio/inicio.component';
import { IniciosensoresComponent } from './Componentes/iniciosensores/iniciosensores.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PantallacargaComponent } from './Componentes/pantallacarga/pantallacarga.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { DatosTemYHumComponent } from './Componentes/ComponentesSensores/datos-tem-yhum/datos-tem-yhum.component'
import { DatosGasComponent } from './Componentes/ComponentesSensores/datos-gas/datos-gas.component'
import { GraficaGasComponent } from './Componentes/ComponentesSensores/grafica-gas/grafica-gas.component'
import { DatosMovimientoComponent } from './Componentes/ComponentesSensores/datos-movimiento/datos-movimiento.component'

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'inicio',component:IniciosensoresComponent},
  {path:'',component:InicioComponent},
  {path:'carga',component:PantallacargaComponent},
  {path:'DatosTemyHum',component:DatosTemYHumComponent},
  {path:'grafTempyHum/:id',component:GraficatemperaturaComponent},
  {path:'DatosGas',component:DatosGasComponent},
  {path:'grafGas/:id',component:GraficaGasComponent},
  {path:'DatosMovimiento',component:DatosMovimientoComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
