import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule
  ]
})
export class SharedUiModule { }
