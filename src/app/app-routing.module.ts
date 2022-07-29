import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// IMPORT COMPONENT START //
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component'
import { Error404Component } from './components/error404/error404.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

// IMPORT COMPONENT END //

const routes: Routes = [
  {path: 'about', component: AboutComponent}, // indicar la ruta y el componente 
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'portafolio', component: PortafolioComponent},

  //{path: 'profile', component: LoginComponent, canActive: [AuthGuard]}, -> Solo accesible si el user esta logueado
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Error404Component}, // Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
