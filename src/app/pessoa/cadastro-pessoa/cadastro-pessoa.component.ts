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

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
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
  matcher = new MyErrorStateMatcher();

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
    this.createForm();
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

  createForm() {
    this.formGroup = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]),
      email: new FormControl('', [Validators.email]),
      sexo: new FormControl('', []),
      naturalidade: new FormControl('', []),
      nacionalidade: new FormControl('', []),            
      dataNascimento: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required,  Validators.minLength(11),  Validators.maxLength(11)]),
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

}