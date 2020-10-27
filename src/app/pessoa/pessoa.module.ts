import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../components/material/material.module';
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";

export const customCurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: ".",
    nullable: true,
    min: null,
    max: null,
    inputMode: CurrencyMaskInputMode.FINANCIAL
};

import { PessoaRoutingModule } from './pessoa-routing.module';
import { ListPessoaComponent } from './list-pessoa/list-pessoa.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';


@NgModule({
  declarations: [ListPessoaComponent, CadastroPessoaComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    MaterialModule,
    FormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ]
})
export class PessoaModule { }
