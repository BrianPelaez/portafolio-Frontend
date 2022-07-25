import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// IMPORT COMPONENT START //
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component'
import { Error404Component } from './error404/error404.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

// IMPORT COMPONENT END //

const routes: Routes = [
  {path: 'about', component: AboutComponent}, // indicar la ruta y el componente 
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactoComponent},
  {path: 'home', component: HomeComponent},


  //{path: 'profile', component: LoginComponent, canActive: [AuthGuard]}, -> Solo accesible si el user esta logueado
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Error404Component}, // Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
