import { Component, Output, EventEmitter } from '@angular/core';
//importa o que será necessário
@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})


export class ChangeNumberComponent {
  //Cria o que vai ser emitido ()
  @Output() changeNumber : EventEmitter<any> = new EventEmitter()

  //Avisa que será emitido
  handleClick(): void{
    //emite
    this.changeNumber.emit()
    //console.log("o numero mudou")
  }

}


