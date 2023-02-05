import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-libro',
  templateUrl: './listado-libro.component.html',
  styleUrls: ['./listado-libro.component.scss']
})
export class ListadoLibroComponent {
  //librosss es el mismo nombre de la clave del html de libreria y es la info q ue nos trae el padre por el input(DEL PADRE)

  //  nunca cambia y vien del padre recogemos con el input los librosss del padre y las dos variables que van cambiando todos los libros y los filtrados
  @Input() public librosss!: any
  //cambiante y viene del padre al principio tiene los libros que le vienen del padre, y si añadimos uno nuevo también le suma, pero cuando filtramos se quedan los filtrados
  @Input() public librosssFiltered!: any

  // creamos este método para filtrar los libros

  buscar (value: string) {
    this.librosssFiltered =
    this.librosss.filter((libro: any) => libro.name.toLowerCase().includes(value.toLowerCase()))
  }

}
