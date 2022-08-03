import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortafolioService } from 'src/app/services/portafolio.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: FormGroup;
  portafolioData: any;

  constructor(private formBuilder: FormBuilder, private portafolio: PortafolioService) { 
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      asunto: ['',],
      mensaje:['', [Validators.required, Validators.maxLength(255)]],
    })
  }

  ngOnInit(): void {
    this.portafolio.obtenerDatos().subscribe(data => {
      this.portafolioData=data;
    })
  }

  onSubmit(event: Event){
    event.preventDefault();
    
    if(this.form.valid){
      console.log("SE EJECUTA")
      document.location = `mailto:pelaez_brian@hotmail.com?subject=${this.form.get('asunto')?.value}&body=${this.form.get('mensaje')?.value}`;
    } else {
      this.form.markAllAsTouched();
      console.log("NO SE EJECUTA")
    }
    
  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Mail() {
    return this.form.get('email');
  }

}
