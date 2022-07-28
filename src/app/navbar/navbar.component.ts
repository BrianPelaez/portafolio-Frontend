import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let test = document.getElementById(window.location.pathname);
  
    test?.classList.add('is-active')
    console.log(test)
  }


    
  

}
