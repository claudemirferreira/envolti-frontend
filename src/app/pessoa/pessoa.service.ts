import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { HttpClient } from '@angular/common/http';
import { FiltroPaginacao } from '../shared/filtro.paginacao';
import { Pessoa } from './pessoa';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends CrudService<Pessoa>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}pessoa/`);
  }

  loadByID(id) {
    return null;
  }

  listarTodos() {
    console.log('listarTodos');
    return this.http.get(`${this.API_URL}`);
  }

  pesquisar(filtro: FiltroPaginacao) {
    console.log(`${this.API_URL}pesquisa`);
    return this.http.post(`${this.API_URL}pesquisar`, filtro);
  }

}
