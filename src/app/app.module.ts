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
import { NgForm } from '@angular/forms';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaAtividadeComponent } from './atividade/consulta-atividade/consulta-atividade.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';
import { MinhaAreaComponent } from './usuario/minha-area/minha-area.component';
import { FormUsuarioLogComponent } from './usuario/form-usuario-log/form-usuario-log.component'; 

let routes = [
  { path: "consulta-atividade", component: ConsultaAtividadeComponent },
  { path : "usuario-inicio", component: UsuarioInicioComponent},
  { path : "", component: LoginComponent},
  { path : "consulta-evento/:id/:nome", component: ConsultaEventoComponent},
  { path : "form-usuario", component: FormUsuarioComponent},
  { path : "minha-area", component: MinhaAreaComponent},
  { path : "form-usuario-log", component: FormUsuarioLogComponent}
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
    FormCursoComponent,
    ConsultaAtividadeComponent,
    FormUsuarioComponent,
    MinhaAreaComponent,
    FormUsuarioLogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
