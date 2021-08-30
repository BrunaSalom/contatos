import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos: Contato[] = [
    {
      nome: "Bruna",
      email: "bruna@teste.com",
      telefones: ["9999-9999"]
    }, {
      nome: "Renan",
      email: "renan@teste.com",
      telefones: ["9999-8888"]
    }, {
      nome: "Tata",
      email: "tata@teste.com",
      telefones: ["9999-7777"]
    }, {
      nome: "Gilson",
      email: "gilson@teste.com",
      telefones: ["9999-6666"]
    }, {
      nome: "Shena",
      email: "shena@teste.com",
      telefones: ["9999-5555"]
    }, {
      nome: "Madonna",
      email: "madonna@teste.com",
      telefones: ["9999-4444"]
    }, {
      nome: "Shakira",
      email: "shakira@teste.com",
      telefones: ["9999-3333"]
    }, {
      nome: "Budweiser",
      email: "budweiser@teste.com",
      telefones: ["9999-2222"]
    }, {
      nome: "Astor",
      email: "astor@teste.com",
      telefones: ["9999-1111"]
    }, {
      nome: "Kepler",
      email: "kepler@teste.com",
      telefones: ["9999-0000"]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
