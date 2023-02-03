import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-libro',
  templateUrl: './new-libro.component.html',
  styleUrls: ['./new-libro.component.scss']
})
export class NewLibroComponent implements OnInit {
  @Output() newContact = new EventEmitter();


  constructor() { }
  ngOnInit(): void {

  }

}



