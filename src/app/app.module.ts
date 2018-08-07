import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PainelEventosComponent } from './eventos/painel-eventos/painel-eventos.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ConsultaEventoComponent } from './eventos/consulta-evento/consulta-evento.component';
import { LoginComponent } from './usuario/login/login.component';
import { UsuarioInicioComponent } from './usuario/usuario-inicio/usuario-inicio.component';
import { RodapeComponent } from './rodape/rodape.component';
<<<<<<< HEAD
import { FormCursoComponent } from './form-curso/form-curso.component';

=======
import { HttpClientModule } from '@angular/common/http';
import { ConsultaAtividadeComponent } from './atividade/consulta-atividade/consulta-atividade.component'; 
>>>>>>> 255d0595ffc995e7d0b44e790b484225bff98de1


let routes = [
  { path: "consulta-atividade", component: ConsultaAtividadeComponent },
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
    RodapeComponent,
<<<<<<< HEAD
    FormCursoComponent,
=======
    ConsultaAtividadeComponent
>>>>>>> 255d0595ffc995e7d0b44e790b484225bff98de1
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
