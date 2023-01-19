import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURI: string = "https://jsonplaceholder.typicode.com/users"
  constructor(
    private http: HttpClient
  ) { }

  getAllUser(){
    return this.http.get<User[]>(this.apiURI)
  }

  getProductById(id: string){
    return this.http.get<User>(`${this.apiURI}/${id}`)
  }
}
