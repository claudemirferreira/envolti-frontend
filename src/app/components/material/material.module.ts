import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule }  from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    NgxUiLoaderModule,
    ToastrModule,
    ToastContainerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    ScrollingModule,


  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgxUiLoaderModule,
    MatGridListModule,
    MatAutocompleteModule,
    ToastrModule,
    ToastContainerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    ScrollingModule,

  ],
})

export class MaterialModule {}
