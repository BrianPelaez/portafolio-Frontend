import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000/api';
  
  
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string){
    this.http.post(this.uri + '/authenticate', { email: email, password: password})
      .subscribe((resp: any) => {
        // Redireccionamos el usuario a su perfil
        this.router.navigate(['profile'])
        // Guardamos el token en localStorage
        localStorage.setItem('auth_token', resp.token);
      });
  }

  // Para cerrar sesion cerramos el token del localStorage
  logout(){
    localStorage.removeItem('token')
  }

  // Un servicio para verificar si existe la sesion
  public get logIn(): boolean {
    return(localStorage.getItem('token') !== null)
  }
}
