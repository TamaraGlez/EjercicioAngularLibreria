import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-libro',
  templateUrl: './listado-libro.component.html',
  styleUrls: ['./listado-libro.component.scss']
})
export class ListadoLibroComponent implements OnInit {
  //librosss es el mismo nombre de la clave del html de libreria y es la info q ue nos trae el padre por el input(DEL PADRE)

  // recogemos con el input los librosss del padre y las dos variables que van cambiando todos los libros y los filtrados
  @Input() public librosss!: any
  // al principio tiene los libros de arriba pero cuando usamos el evento filtra y muestra los filtrados
  @Input() public librosssFiltered!: any

    // copiamos el array libros en librosssFiltered

    ngOnInit() {
    this.librosssFiltered = [...this.librosss]
    }

  // creamos este método para filtrar los libros por este va

  buscar (value: string) {
  this.librosssFiltered = this.librosss.filter((libro: any) => libro.name.toLowerCase().includes(value.toLowerCase()))
  }

}
