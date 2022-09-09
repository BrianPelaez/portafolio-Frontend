import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  portafolioData: any;
  expList: any;

  constructor() {}

  ngOnInit(): void {
    const options = {
      strings: ['Desarrollador', 'Full-Stack Dev.', 'Programador', 'Soporte IT'],
      typeSpeed: 40,
      backSpeed: 40,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    const typed = new Typed('.typing', options);
  }
}
