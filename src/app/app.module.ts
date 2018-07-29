import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainelEventosComponent } from './painel-eventos/painel-eventos.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelEventosComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
