import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebastest',
  templateUrl: './pruebastest.page.html',
  styleUrls: ['./pruebastest.page.scss'],
})
export class PruebastestPage implements OnInit {
  

  constructor() { }
  slideOptions={              //CReacion de las tarjetas
    slidesPerView:1 //Aqui se modifica el espacion entre las cards
  }

  ngOnInit() {
  }

}
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir?.addEventListener("click", () =>{
  nav?.classList.add("visible");
})

cerrar?.addEventListener("click", () =>{
  nav?.classList.remove("visible");
})