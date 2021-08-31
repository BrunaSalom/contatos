import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelClick: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  fecharModalClick() {
    console.log("Cancelei no modal")
    this.onCancelClick.emit();
  }

}
