import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private url = "https://reqres.in/api/users";
  private url = "http://localhost:3000";
  private endpoint = "usuarios";


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/${this.endpoint}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.url}/${this.endpoint}`, user);
  }

  getUserById(id: string): Observable<User>{
    return this.http.get<User>(`${this.url}/${this.endpoint}/${id}`);
  }

  editUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.url}/${this.endpoint}/${user.id}`, user);
  }

  deleteUser(user: User): Observable<{}>{
    return this.http.delete<User>(`${this.url}/${this.endpoint}/${user.id}`);
  }
}
