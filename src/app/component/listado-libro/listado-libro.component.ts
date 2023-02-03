import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-libro',
  templateUrl: './listado-libro.component.html',
  styleUrls: ['./listado-libro.component.scss']
})
export class ListadoLibroComponent implements OnInit {
//libros es el mismo nombre de la clave del html de libreria(DEL PADRE)

public librosssFiltered!: any

  @Input() librosss!: any


  constructor() { }

  ngOnInit(): void {

    this.librosssFiltered = [...this.librosss]

  }

  buscar (value: string){
  this.librosssFiltered = this.librosss.filter((libro: any) => libro.name.includes(value))
  }
}
