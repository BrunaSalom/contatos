import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

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
    telefones: [""],
  }

  cs:ContatoService = new ContatoService();

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

  addTelefone():void{
    this.novoContato.telefones.push("")
  }

  removeTelefone(i:number):void{
    this.novoContato.telefones.splice(i,1)
  }

  salvar(){
    console.log("salvando...");
    this.cs.addContato(this.novoContato);
    this.onCancelClick.emit();
    // se quiser apenas limpar para mais um contato:
    // this.novoContato = {nome:"", email:"", telefones:[""]}
  }
}
