import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent implements OnInit {

  listado: any = [];

  constructor() { }

ngOnInit(): void {

this.listado = [
  {
    name: 'libro1',
    autor: 'Pepito',
    year: '1999',
    image: 'https://picsum.photos/200/300'
  },

  {
    name: 'libro2',
    autor: 'Juanito',
    year: '1999',
    image: 'https://picsum.photos/200/300'
  },

  {
    name: 'libro3',
    autor: 'Juanito',
    year: '1999',
    image: 'https://picsum.photos/200/300'
  }

  ]
}

}
