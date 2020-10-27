import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './crud-service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [  ],
  // entryComponents não é necessário a partir do angular v9
  // entryComponents: [AlertModalComponent, ConfirmModalComponent]
})
export class SharedModule { }
