import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersCadastrarRoutingModule } from './users-cadastrar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersCadastrarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersCadastrarModule { }
