import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UsersCadastrarComponent } from './pages/users/users-cadastrar/users-cadastrar.component';

const routes:Routes=[
  {path: '', component: UsersComponent },
  /* {path: 'users', component: UsersComponent },
  {path: 'users/users-cadastrar', component: UsersCadastrarComponent },
  {path: 'users/users-editar/:id', component: UsersCadastrarComponent }, */
  {
    path: "users",
    loadChildren: () => import("./pages/users/users.module").then((modulo) => modulo.UsersModule),
  },
  {
    path: "users/users-cadastrar",
    loadChildren: () => import("./pages/users/users-cadastrar/users-cadastrar.module").then((modulo) => modulo.UsersCadastrarModule),
  },
  {
    path: "users/users-editar/:id",
    loadChildren: () => import("./pages/users/users-cadastrar/users-cadastrar.module").then((modulo) => modulo.UsersCadastrarModule),
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
