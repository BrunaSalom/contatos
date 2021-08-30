import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  @Input() registro!:Contato;

  constructor() { }

  ngOnInit(): void {
  }

}
