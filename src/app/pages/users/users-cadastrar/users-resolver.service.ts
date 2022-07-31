import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { empty, of } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User>{
  

  constructor(private userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const id = route.params["id"];
    if(id){
      return this.userService.getUserById(id);
    }
    return of({} as User);
  }
}
