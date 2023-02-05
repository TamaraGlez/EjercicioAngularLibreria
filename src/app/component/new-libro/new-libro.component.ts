import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-libro',
  templateUrl: './new-libro.component.html',
  styleUrls: ['./new-libro.component.scss']
})
export class NewLibroComponent implements OnInit {
  //el altavoz(suele llamarse emitMessage) que creamos para que el padre libreria nos esuche
  @Output() public altavoz = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void { }



  public libro!: any;
  //parámetros que deben llegar al padre(los mismos que él tiene en su array y en los parámetro de recogida)
  crearNuevoLibro (name: string, autor: string, year:string, image: string, ) {
    console.log(name, autor, year, image)
    //aqui convertimos la info que entra del input en objeto debe tener los mismos parámetro que tenemos en el html
    this.libro = {
      name: name,
      autor: autor,
      year: year,
      image: image,
    }
    //este es el mensaje que se emite en este caso el libro que se crea nuevo y lo añadimos al array del papi
    this.altavoz.emit(this.libro)
  }

}



