import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      asunto: ['',],
      mensaje:['', [Validators.required, Validators.maxLength(255)]],
    })
  }

  ngOnInit(): void {
    console.log("Prueba")
  }

  onSubmit(event: Event){

  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Mail() {
    return this.form.get('email');
  }

}
