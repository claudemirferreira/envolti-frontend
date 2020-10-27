import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { FiltroPaginacao } from '../../shared/filtro.paginacao';
import { Pessoa } from '../pessoa';
import { CadastroPessoaComponent } from '../cadastro-pessoa/cadastro-pessoa.component';

import { ResponseApi } from '../../shared/response-api';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css']
})
export class ListPessoaComponent implements OnInit {

  lista = new MatTableDataSource<Pessoa>();
  pessoa : Pessoa;

  filtroPaginacao = new FiltroPaginacao();
  displayedColumns = ['id', 'nome', 'cpf', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageSizeOptions: number[] = [5, 10, 20,];

  constructor(private service : PessoaService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filtroPaginacao.page = 0;
    this.filtroPaginacao.size = 5;
    this.filtroPaginacao.nome = '';

    this.pesquisar();
    this.lista.paginator = this.paginator;
    this.lista.sort = this.sort;
  }

  pesquisar(){
    console.log('############nome='+this.filtroPaginacao.nome)
    this.ngxLoader.start();
    this.service.pesquisar(this.filtroPaginacao).subscribe((responseApi: ResponseApi) => {
      console.log(responseApi['content']);
      this.lista = new MatTableDataSource<Pessoa>(responseApi['content']);
      this.lista.sort = this.sort;

      this.filtroPaginacao.totalElements = responseApi['totalElements'];
      this.filtroPaginacao.pageSize = responseApi['totalPages'];
      this.filtroPaginacao.pageIndex = responseApi['number'];
      this.filtroPaginacao.pageSize = responseApi['size'];

      this.ngxLoader.stop();
    }, err => {
      console.log('################error');
    });
  }

  pageChange($event) {
    this.filtroPaginacao.size = $event.pageSize;
    this.filtroPaginacao.page = $event.pageIndex
    this.pesquisar();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  showSuccess() {
    this.toastr.success('Operação realizada com sucesso!', 'Sucesso');
  }

  openDialog(): void {
    this.openDialogEditar(new Pessoa() );
  }

  openDialogEditar(pessoa : Pessoa): void {
    this.pessoa = pessoa;
    console.log(JSON.stringify(pessoa));
    const dialogRef = this.dialog.open(CadastroPessoaComponent, {
      width: '650px',
      data: this.pessoa
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.pessoa = result;
    });
  }

  delete(pessoa: Pessoa) {
    return this.service.remove(pessoa.id)
      .subscribe(() => {
        console.log('saved');
        this.showSuccess();
        this.pesquisar();
      },
        error => {
          this.toastr.error('Ocorreu um error!', 'Error');
          console.log(JSON.stringify(error));
        }

      );
  }

}
