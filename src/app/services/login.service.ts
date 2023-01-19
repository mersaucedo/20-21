import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUri: string = "https://expensable-api.herokuapp.com"

  constructor(
    private http: HttpClient,
  ) { }

  login(credentials: any){
    return this.http.post(`${this.apiUri}/login`, credentials)
  }
}

