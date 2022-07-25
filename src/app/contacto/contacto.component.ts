import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  //form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    //this.form = this.formBuilder.group({})
  }

  ngOnInit(): void {
    console.log("Prueba")
  }

}
