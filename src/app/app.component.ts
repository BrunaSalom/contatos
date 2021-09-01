import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatos';
  mostrandoModal = true;

  abrir(){
    console.log("Te escutei e abri");
    this.mostrandoModal = true;
  }

  fechar(){
    console.log("Te escutei e fechei");
    this.mostrandoModal = false;
  }

}
