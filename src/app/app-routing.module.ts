import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficatemperaturaComponent } from './Componentes/ComponentesSensores/graficatemperatura/graficatemperatura.component';
import { InicioComponent } from './Componentes/ComponentesSensores/inicio/inicio.component';
import { IniciosensoresComponent } from './Componentes/iniciosensores/iniciosensores.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PantallacargaComponent } from './Componentes/pantallacarga/pantallacarga.component';
import { RegisterComponent } from './Componentes/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'inicio',component:IniciosensoresComponent},
  {path:'',component:InicioComponent},
  {path:'graftemp',component:GraficatemperaturaComponent},
  {path:'carga',component:PantallacargaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
