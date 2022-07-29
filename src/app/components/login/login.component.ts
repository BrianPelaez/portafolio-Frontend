import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  form: FormGroup; // Inicializamos el formulario
  
  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });

    // this.form = this.formBuilder.group({ // Se puede crear Validadores dependiendo el campo.
    //   edad:[0, Validators.min(18)], // min valida que el valor sea igual o mayor a 18 
    //   precio:[0, [Validators.min(500), Validators.max(3000)]], // compose deja hacer multiples validaciones.
    //   name:['', Validators.required],
    //   terms:['', Validators.requiredTrue], // Validacion para checkboxes
    //   email:['', Validators.email], // Chequea si es un mail
    //   text:['', Validators.pattern(/^[\w ]+$/)], // Valida Expresiones regulares
    //   date:[''],
    //   category:[''],
    //   gender:[''],
    // });
  }

  Login() {
    // El servicio authService.login ya redirecciona
    // en caso de inicio de sesion positivo
    //this.authService.login(Mail(), this.Password());
  }

  ngOnInit(): void {}

  get Password() {
    return this.form.get('password');
  }

  get Mail() {
    return this.form.get('email');
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false;
  }

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert('Todo salio bien ¡Enviar formuario!');
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }


}
