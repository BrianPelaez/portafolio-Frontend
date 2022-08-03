import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortafolioService } from 'src/app/services/portafolio.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  portafolioData:any;

  constructor(private portafolio: PortafolioService) { }

  ngOnInit(): void {
    this.portafolio.obtenerDatos().subscribe(async (data) => {
      this.portafolioData = await data;      
    });
    
    
  }

}
