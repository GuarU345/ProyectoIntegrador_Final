import { InterceptorCerrarSesionService } from './Componentes/Interceptores/interceptor-cerrar-sesion.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IniciosensoresComponent } from './Componentes/iniciosensores/iniciosensores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantallacargaComponent } from './Componentes/pantallacarga/pantallacarga.component';
import { GraficatemperaturaComponent } from './Componentes/ComponentesSensores/graficatemperatura/graficatemperatura.component';
import { InicioComponent } from './Componentes/ComponentesSensores/inicio/inicio.component';
import { NgChartsModule } from 'ng2-charts';
import { DatosTemYHumComponent } from './Componentes/ComponentesSensores/datos-tem-yhum/datos-tem-yhum.component';
import { DatosGasComponent } from './Componentes/ComponentesSensores/datos-gas/datos-gas.component';
import { GraficaGasComponent } from './Componentes/ComponentesSensores/grafica-gas/grafica-gas.component';
import { DatosMovimientoComponent } from './Componentes/ComponentesSensores/datos-movimiento/datos-movimiento.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IniciosensoresComponent,
    PantallacargaComponent,
    GraficatemperaturaComponent,
    InicioComponent,
    DatosTemYHumComponent,
    DatosGasComponent,
    GraficaGasComponent,
    DatosMovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorCerrarSesionService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
