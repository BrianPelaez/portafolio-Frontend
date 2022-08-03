import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  portafolioData: any;

  constructor(private portafolio: PortafolioService) { }

  ngOnInit(): void {
    this.portafolio.obtenerDatos().subscribe(data => {
      this.portafolioData = data;
    })
  }

}
