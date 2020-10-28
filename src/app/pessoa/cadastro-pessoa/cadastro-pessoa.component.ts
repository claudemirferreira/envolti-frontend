import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ResponseApi } from 'src/app/shared/response-api';


/** Error when the parent is invalid */
class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css'],
})
export class CadastroPessoaComponent implements OnInit {

  formGroup: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  sexos: string[] = ['M', 'F'];

  constructor(
    private service : PessoaService,
    public dialogRef: MatDialogRef<CadastroPessoaComponent>,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public pessoa: Pessoa
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.pessoa));
    this.initForm();
  }

  onSubmit(){

  }

  salvar(){
    this.ngxLoader.start();
    this.service.save(this.pessoa).subscribe((responseApi: ResponseApi) => {
      console.log(responseApi['content']);
      this.showSuccess();
      this.ngxLoader.stop();
    }, err => {
      console.log('################error');
    });
  }

  showSuccess() {
    this.toastr.success('Operação realizada com sucesso!', 'Sucesso');
  }

  initForm() {
    this.formGroup = this.fb.group({
      nome: '',
      valor: '',
      descricao: ''
    }, {

    })
  }

}
