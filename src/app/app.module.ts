import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciosensoresComponent } from './Componentes/iniciosensores/iniciosensores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantallacargaComponent } from './Componentes/pantallacarga/pantallacarga.component';
import { GraficatemperaturaComponent } from './Componentes/ComponentesSensores/graficatemperatura/graficatemperatura.component';
import { InicioComponent } from './Componentes/ComponentesSensores/inicio/inicio.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IniciosensoresComponent,
    PantallacargaComponent,
    GraficatemperaturaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
