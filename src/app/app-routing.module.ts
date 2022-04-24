import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficatemperaturaComponent } from './Componentes/ComponentesSensores/graficatemperatura/graficatemperatura.component';
import { InicioComponent } from './Componentes/ComponentesSensores/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PantallacargaComponent } from './Componentes/pantallacarga/pantallacarga.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { GraficaGasComponent } from './Componentes/ComponentesSensores/grafica-gas/grafica-gas.component'
import { DatosMovimientoComponent } from './Componentes/ComponentesSensores/datos-movimiento/datos-movimiento.component'
import { GraficaLedComponent } from './Componentes/ComponentesSensores/grafica-led/grafica-led.component'
import { GuardianGuard } from './Componentes/Guards/guardian.guard'

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'inicio',component:InicioComponent,canActivate:[GuardianGuard]},
  {path:'carga',component:PantallacargaComponent},
  {path:'grafTempyHum',component:GraficatemperaturaComponent,canActivate:[GuardianGuard]},
  {path:'grafGas',component:GraficaGasComponent,canActivate:[GuardianGuard]},
  {path:'grafLed',component:GraficaLedComponent,canActivate:[GuardianGuard]},
  {path:'DatosMovimiento',component:DatosMovimientoComponent,canActivate:[GuardianGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
