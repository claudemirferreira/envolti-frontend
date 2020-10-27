
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './components/material/material.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexModule } from '@angular/flex-layout/flex';
import { GridModule } from '@angular/flex-layout/grid';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ToastrModule } from 'ngx-toastr';

import { CrudService } from './shared/crud-service';
import { PessoaService } from './pessoa/pessoa.service';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    PessoaModule,
    SharedModule,
    NgxUiLoaderModule,
    FlexLayoutModule,
    FlexModule,
    GridModule,
    AutocompleteLibModule,
    ToastrModule.forRoot(),
    PdfJsViewerModule,


  ],
  providers: [
    CrudService,
    PessoaService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
