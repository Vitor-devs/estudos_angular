import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean = false;
  showMessage(): void {
    /* vai sempre invertendo o valor de show (toggle ) */
    this.show = !this.show;
  }


  ligado : boolean = false;
  Ligar(): void{
    let lampada = document.getElementById('imgLampada')

    this.ligado = !this.ligado
    if (this.ligado == true){
      lampada?.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true'
      )
    }
  }
}

