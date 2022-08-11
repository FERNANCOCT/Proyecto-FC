import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './Components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './Components/inicio/login/login.component';
import { RegisterComponent } from './Components/inicio/register/register.component';

const routes: Routes = [
    { path: '', redirectTo: '/bienvenidos', pathMatch: 'full'},
    { path: 'bienvenidos', component: BienvenidaComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '/bienvenidos', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }