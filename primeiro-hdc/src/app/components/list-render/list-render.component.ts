import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Belinha", type: "Dog", age: 4},
    {name: "Bolinha", type: "Cat", age: 9},
    {name: "Frida", type: "Horse", age: 10},
    {name: "Geraldo", type: "Seal", age: 7}
  ]

  pessoas = [
    {nome: "Vitor", idade: "18", job: "Desenvolvedor"},
    {nome: "Ana", idade: "19", job: "Recrutadora"},
    {nome: "Jessé", idade: "18", job: "Policial"},
    {nome: "Carlos", idade: "20", job: "Estudante"}
  ]

  animalDetails: String = ''
  br = '\n'
  showAge(animal: Animal){
    this.animalDetails += `O pet ${animal.name}, tem ${animal.age} anos!`

  }

}
