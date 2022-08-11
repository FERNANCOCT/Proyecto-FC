import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { BienvenidaComponent } from '../app/Components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from '../app/Components/inicio/login/login.component';
import { RegisterComponent } from '../app/Components/inicio/register/register.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
