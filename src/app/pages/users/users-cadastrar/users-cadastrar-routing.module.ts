import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCadastrarComponent } from './users-cadastrar.component';
import { UsersResolverService } from './users-resolver.service';

const routes: Routes = [
  {
    path: '',
    component:UsersCadastrarComponent,
    resolve:{
      user:UsersResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersCadastrarRoutingModule { }
