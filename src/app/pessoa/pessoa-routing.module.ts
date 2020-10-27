import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPessoaComponent } from './list-pessoa/list-pessoa.component';

const routes: Routes = [
  {path : 'list-pessoa', component : ListPessoaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
