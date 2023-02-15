import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { CriacaoMinhaComponent } from './components/criacao-minha/criacao-minha.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CriacaoMinhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
