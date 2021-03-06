import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import { FiltroPaginacao } from "../../shared/filtro.paginacao";
import { Pessoa } from "../pessoa";
import { CadastroPessoaComponent } from "../cadastro-pessoa/cadastro-pessoa.component";

import { ResponseApi } from "../../shared/response-api";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material/dialog";
import { PessoaService } from "../pessoa.service";

@Component({
  selector: "app-list-pessoa",
  templateUrl: "./list-pessoa.component.html",
  styleUrls: ["./list-pessoa.component.css"],
})
export class ListPessoaComponent implements OnInit {
  lista = new MatTableDataSource<Pessoa>();
  pessoa: Pessoa;

  filtroPaginacao = new FiltroPaginacao();
  displayedColumns = ["id", "nome", "cpf", "acoes"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageSizeOptions: number[] = [5, 10, 20];

  constructor(
    private service: PessoaService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.filtroPaginacao.page = 0;
    this.filtroPaginacao.size = 5;
    this.filtroPaginacao.nome = "";
    this.pesquisar();
    this.lista.paginator = this.paginator;
    this.lista.sort = this.sort;
  }

  pesquisar() {
    this.ngxLoader.start();
    this.service.pesquisar(this.filtroPaginacao).subscribe(
      (responseApi: ResponseApi) => {
        console.log(responseApi["content"]);
        this.lista = new MatTableDataSource<Pessoa>(responseApi["content"]);
        this.lista.sort = this.sort;

        this.filtroPaginacao.totalElements = responseApi["totalElements"];
        this.filtroPaginacao.pageSize = responseApi["totalPages"];
        this.filtroPaginacao.pageIndex = responseApi["number"];
        this.filtroPaginacao.pageSize = responseApi["size"];

        this.ngxLoader.stop();
      },
      (err) => {
        this.showError();
      }
    );
  }

  pageChange($event) {
    this.filtroPaginacao.size = $event.pageSize;
    this.filtroPaginacao.page = $event.pageIndex;
    this.pesquisar();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(",")
        .map((str) => +str);
    }
  }

  showSuccess() {
    this.toastr.success("Operação realizada com sucesso!", "Sucesso");
  }

  showError() {
    this.toastr.error(
      "Ocorreu um erro, favor entrar em contato com o suporte!",
      "Error"
    );
  }

  openDialog(): void {
    this.openDialogEditar(new Pessoa());
  }

  openDialogEditar(pessoa: Pessoa): void {
    this.pessoa = pessoa;
    const dialogRef = this.dialog.open(CadastroPessoaComponent, {
      width: "700px",
      data: this.pessoa,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.pessoa = result;
      this.ngOnInit();
    });
  }

  delete(pessoa: Pessoa) {
    return this.service.remove(pessoa.id).subscribe(
      () => {
        console.log("saved");
        this.showSuccess();
        this.pesquisar();
      },
      (error) => {
        this.showError();
        console.log(JSON.stringify(error));
      }
    );
  }
}
