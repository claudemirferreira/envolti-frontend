import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

  { path: 'pessoa',
      loadChildren: 'app/pessoa/pessoa.module#PessoaModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
