import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainelEventosComponent } from './painel-eventos/painel-eventos.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelEventosComponent,
    MenuLateralComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
