import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Vitor";
  age: number = 30;
  job: string = "Estudante de Angular";
  hobbies = ['Correr', 'jogar', "Estudar"]
  car = {
    name: "Porschezona",
    modelo: "Panamera"
  }
}
