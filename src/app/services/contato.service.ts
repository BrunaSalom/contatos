import { Injectable } from '@angular/core';
import { Contato } from "../models/Contato";

const BASE_DE_CONTATOS:Contato[] = [
  {
    nome: "Bruna",
    email: "bruna@teste.com",
    telefones: ["9999-9999"]
  }, {
    nome: "Renan",
    email: "renan@teste.com",
    telefones: ["9999-8888", "8888-8888"]
  }, {
    nome: "Tata",
    email: "tata@teste.com",
    telefones: ["9999-7777", "8888-7777"]
  }, {
    nome: "Gilson",
    email: "gilson@teste.com",
    telefones: ["9999-6666", "8888-6666"]
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

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseDeContatos:Contato[];
  private chave:string = "CONTATOS";

  constructor() {
    // carrega informações do LocalStorage
    let dados = window.localStorage.getItem(this.chave);

    // verifica. se existe transforma em array e guarda em baseDeContatos
    if(dados){
      this.baseDeContatos = JSON.parse(dados);

      // se não existe cria um array vazio e guarda na baseDeContatos
    }else{
      window.localStorage.setItem(this.chave, "[]");
      this.baseDeContatos = []
    }
  }

  getContatos():Contato[] {
    return this.baseDeContatos;
  }

  addContato(contato:Contato) {
    this.baseDeContatos.push(contato);
    window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos));
    location.reload()
  }

  // removerContato(contato:Contato) {
  //   BASE_DE_CONTATOS.splice(1, 1)
  // }

}
