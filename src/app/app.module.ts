import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PainelEventosComponent } from './eventos/painel-eventos/painel-eventos.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ConsultaEventoComponent } from './eventos/consulta-evento/consulta-evento.component';
import { LoginComponent } from './usuario/login/login.component';
import { UsuarioInicioComponent } from './usuario/usuario-inicio/usuario-inicio.component';
import { RodapeComponent } from './rodape/rodape.component';

let routes = [
  { path : "usuario-inicio", component: UsuarioInicioComponent},
  { path : "login", component: LoginComponent},
  { path : "consulta-evento/:id", component: ConsultaEventoComponent}
  

]


@NgModule({
  declarations: [
    AppComponent,
    PainelEventosComponent,
    BarraNavegacaoComponent,
    ConsultaEventoComponent,
    LoginComponent,
    UsuarioInicioComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
