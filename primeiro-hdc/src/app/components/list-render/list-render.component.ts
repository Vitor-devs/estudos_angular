import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: "Belinha", type: "Dog"},
    {name: "Bolinha", type: "Cat"},
    {name: "Frida", type: "Horse"},
    {name: "Geraldo", type: "Seal"}
  ]

  pessoas = [
    {nome: "Vitor", idade: "18", job: "Desenvolvedor"},
    {nome: "Ana", idade: "19", job: "Recrutadora"},
    {nome: "Jessé", idade: "18", job: "Policial"},
    {nome: "Carlos", idade: "20", job: "Estudante"}
  ]

}

// //{name: "Belinha", type: "Dog"},
// {name: "Bolinha", type: "Cat"},
// {name: "Frida", type: "Horse"},
// // {name: "Geraldo", type: "Seal"}


// {nome: "Vitor", idade: "18", job: "Desenvolvedor"},
// {nome: "Ana", idade: "19", job: "Recrutadora"},
// {nome: "Jessé", idade: "18", job: "Policial"},
// {nome: "Carlos", idade: "20", job: "Estudante"},