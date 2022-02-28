import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { InscreverComponent } from '../inscrever/inscrever.component';
import { ListaVComponent } from '../lista-v/lista-v.component';

const rotas: Routes = [
  {path: 'home', component: MuralVagasComponent },
  {path: 'painel', component: PainelVagasComponent },
  {path: 'sign', component: InscreverComponent },
  {path: 'list', component: ListaVComponent},
  {path: '', redirectTo: '/mural', pathMatch:'full'}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
