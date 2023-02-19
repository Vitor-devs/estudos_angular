import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Joaquim";
  age = 37

  userData = {
    email : "joaquim123@gmail.com",
    role : "ADM"
  }
  title = 'primeiro-hdc';
}
