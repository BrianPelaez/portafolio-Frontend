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

  }

  onSubmit(event: Event){
    document.location = `mailto:pelaez_brian@hotmail.com?subject=${this.form.get('asunto')?.value}&body=${this.form.get('mensaje')?.value}`;
  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Mail() {
    return this.form.get('email');
  }

}
