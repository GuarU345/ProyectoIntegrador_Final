import { InterceptorCerrarSesionService } from './Componentes/Interceptores/interceptor-cerrar-sesion.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantallacargaComponent } from './Componentes/pantallacarga/pantallacarga.component';
import { GraficatemperaturaComponent } from './Componentes/ComponentesSensores/graficatemperatura/graficatemperatura.component';
import { InicioComponent } from './Componentes/ComponentesSensores/inicio/inicio.component';
import { NgChartsModule } from 'ng2-charts';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { GraficaGasComponent } from './Componentes/ComponentesSensores/grafica-gas/grafica-gas.component';
import { DatosMovimientoComponent } from './Componentes/ComponentesSensores/datos-movimiento/datos-movimiento.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { GraficaLedComponent } from './Componentes/ComponentesSensores/grafica-led/grafica-led.component';
import { FiltroExcelComponent } from './Componentes/ComponentesSensores/filtro-excel/filtro-excel.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PantallacargaComponent,
    GraficatemperaturaComponent,
    InicioComponent,
    GraficaGasComponent,
    DatosMovimientoComponent,
    DashboardComponent,
    GraficaLedComponent,
    FiltroExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
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
