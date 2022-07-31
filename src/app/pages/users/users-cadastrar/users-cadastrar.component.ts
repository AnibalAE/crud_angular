import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-cadastrar',
  templateUrl: './users-cadastrar.component.html',
  styleUrls: ['./users-cadastrar.component.css']
})
export class UsersCadastrarComponent implements OnInit {

  formGroup!: FormGroup;
  user!: User;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['user'];
    this.formGroup = this.formBuilder.group({
      id:[(this.user && this.user.id) ? this.user.id: null],
      nome: [(this.user.nome && this.user) ? this.user.nome : "", Validators.required],
      nascimento: [(this.user.nascimento && this.user) ? this.user.nascimento : "", Validators.required],
      classificacao: [(this.user.classificacao && this.user) ? this.user.classificacao : "", Validators.required],
    });
  }
  

  salvar(){
    if(this.user.id && this.user){
      this.userService.editUser(this.formGroup.value).subscribe(
        userEditado =>{
          Swal.fire({
            icon: 'success',
            title: 'Registro salvo com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl("")
        },
        error =>{
          alert("Erro ao atualizar " + JSON.stringify(error));
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Aconteceu algo inesperado!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      )
    } else {
      this.userService.createUser(this.formGroup.value).subscribe(
        userCadastrado =>{
          Swal.fire({
            icon: 'success',
            title: 'Registro salvo com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl("")
        },
        error =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Aconteceu algo inesperado!',
            showConfirmButton: false,
            timer: 1500
          })
          alert("Erro ao cadastrar " + JSON.stringify(error));
        }
      )
    }
  }

  deletar(){
    if(confirm("Deseja deletar o usuário " + this.user.nome)){
      this.userService.deleteUser(this.user).subscribe(
        res => {
          Swal.fire({
            icon: 'success',
            title: 'Registro deletado com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl("");
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Aconteceu algo inesperado!',
            showConfirmButton: false,
            timer: 1500
          })
          alert("Erro ao deletar " + JSON.stringify(error));
        }
      )
    }
  }
}
