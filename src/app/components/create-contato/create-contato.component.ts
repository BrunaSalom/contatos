import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelClick: EventEmitter<null> = new EventEmitter();

  novoContato:Contato = {
    nome: "",
    email: "",
    telefones: ["", ""],
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  fecharModalClick() {
    console.log("Cancelei no modal")
    this.onCancelClick.emit();
  }

  track(index:number, value:string){
    return index;
  }

}
